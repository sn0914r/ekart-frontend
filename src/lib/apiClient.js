import { logger } from "@utils/logger";
import useAuthStore from "@app/store/authStore";

const BASE_URL = import.meta.env.VITE_API_URL;

// ----------------------------------- REFRESH TOKEN STATE -----------------------------------

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((promise) => {
    if (error) promise.reject(error);
    else promise.resolve(token);
  });
  failedQueue = [];
};



// ----------------------------------- PRIVATE HELPERS -----------------------------------

function prepareConfig(accessToken, options) {
  const isFormData = options.body instanceof FormData;
  
  const headers = {
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    ...(!isFormData && { "Content-Type": "application/json" }),
    ...(options.headers || {}),
  };

  return {
    ...options,
    headers,
    credentials: "include",
    body: formatRequestBody(options.body, isFormData),
  };
}

function formatRequestBody(body, isFormData) {
  if (!body || isFormData || typeof body === "string") return body;
  return JSON.stringify(body);
}

async function parseJSON(response) {
  const data = await response.json().catch(() => null);
  return data;
}

function isTokenExpired(response, data) {
  return response.status === 401 && data?.errorCode === "INVALID_TOKEN";
}

function isErrorResponse(response, data) {
  return !response.ok || (data && data.success === false);
}

function normalizeError(response, data) {
  const error = new Error(data?.message || "Something went wrong");
  Object.assign(error, {
    message: data?.message || "Something went wrong",
    code: data?.errorCode || "UNKNOWN_ERROR",
    validationErrors: data?.errors || null,
    status: response.status,
  });
  return error;
}

async function handleRefreshFlow(endpoint, options) {
  const { clearAuth, setAuth } = useAuthStore.getState();

  // If already refreshing, wait in line
  if (isRefreshing) {
    return new Promise((resolve, reject) => {
      failedQueue.push({ 
        resolve: () => resolve(apiClient(endpoint, options)), 
        reject 
      });
    });
  }

  isRefreshing = true;

  try {
    logger.info("Attempting to refresh session...");
    const resp = await fetch(`${BASE_URL}/auth/refresh`, {
      method: "POST",
      credentials: "include",
    });

    const data = await resp.json();

    if (resp.ok && data.accessToken) {
      logger.info("Session refreshed successfully");
      setAuth(data.accessToken);
      
      isRefreshing = false;
      processQueue(null, data.accessToken);

      return apiClient(endpoint, options);
    } else {
      throw new Error(data?.message || "Refresh failed");
    }
  } catch (err) {
    logger.error("Session refresh failed", err);
    isRefreshing = false;
    processQueue(err);
    clearAuth();
    
    if (window.location.pathname !== "/auth/login") {
      window.location.href = "/auth/login";
    }
    throw err;
  }
}


// ----------------------------------- MAIN CLIENT -----------------------------------

const apiClient = async (endpoint, options = {}) => {
  const { accessToken } = useAuthStore.getState();
  const url = `${BASE_URL}${endpoint}`;
  
  // 1. Prepare Request Configuration
  const config = prepareConfig(accessToken, options);

  try {
    // 2. Execute Request
    const response = await fetch(url, config);
    const data = await parseJSON(response);

    // 3. Intercept: Token Expired (401)
    if (isTokenExpired(response, data)) {
      return handleRefreshFlow(endpoint, options);
    }

    // 4. Intercept: Application Errors
    if (isErrorResponse(response, data)) {
      throw normalizeError(response, data);
    }

    logger.info(`[Success] ${endpoint}`, data);
    return data;
  } catch (error) {
    if (error.name === "TypeError") logger.error("Network Error", error);
    console.log(error)
    throw error;
  }
};

export default apiClient;
