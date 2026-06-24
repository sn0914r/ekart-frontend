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
  return (
    response.status === 401 &&
    (data?.errorCode === "INVALID_TOKEN" ||
      (data?.errorCode === "UNAUTHORIZED_ERROR" && data?.message === "Session expired"))
  );
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
        reject,
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

    const responseBody = await resp.json();
    const newAccessToken = responseBody?.data?.accessToken;

    if (resp.ok && newAccessToken) {
      logger.info("Session refreshed successfully");
      setAuth(newAccessToken);

      isRefreshing = false;
      processQueue(null, newAccessToken);

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
      const currentUrl = encodeURIComponent(window.location.pathname + window.location.search);
      window.location.href = `/auth/login?expired=true&redirectTo=${currentUrl}`;
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
    const responseBody = await parseJSON(response);

    // 3. Intercept: Token Expired (401)
    if (isTokenExpired(response, responseBody)) {
      return handleRefreshFlow(endpoint, options);
    }

    // 4. Intercept: Application Errors
    if (isErrorResponse(response, responseBody)) {
      const error = normalizeError(response, responseBody);

      if (error.code === "UNAUTHORIZED_ERROR") {
        useAuthStore.getState().clearAuth();
        if (window.location.pathname !== "/auth/login") {
          const currentUrl = encodeURIComponent(window.location.pathname + window.location.search);
          window.location.href = `/auth/login?expired=true&redirectTo=${currentUrl}`;
        }
      } else if (error.code === "FORBIDDEN_ERROR") {
        if (window.location.pathname !== "/forbidden") {
          window.location.href = "/forbidden";
        }
      }

      throw error;
    }

    logger.info(`[Success] ${endpoint}`, responseBody);
    return responseBody;
  } catch (error) {
    if (error.name === "TypeError") logger.error("Network Error", error);
    console.log(error.code);
    throw error;
  }
};

export default apiClient;
