import { logger } from "@utils/logger";
import useAuthStore from "@store/authStore";

const BASE_URL = import.meta.env.VITE_API_URL;

// ==========================================
// Token Refresh State (Handles concurrent calls)
// ==========================================
let isRefreshing = false;
let refreshSubscribers = [];

const subscribeTokenRefresh = (callback) => refreshSubscribers.push(callback);

const onTokenRefreshed = (newToken) => {
  refreshSubscribers.forEach((callback) => callback(newToken));
  refreshSubscribers = [];
};

const apiClient = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;
  const { accessToken } = useAuthStore.getState();

  const isFormData = options.body instanceof FormData;
  const headers = {
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    ...(!isFormData && { "Content-Type": "application/json" }),
    ...(options.headers || {}),
  };

  const config = {
    ...options,
    headers,
    credentials: "include",
    body:
      options.body && !isFormData && typeof options.body !== "string"
        ? JSON.stringify(options.body)
        : options.body,
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json().catch(() => null);
    logger.info("API Response", data);

    // Handle Token Expiry (401)
    if (response.status === 401 && data?.errorCode === "INVALID_TOKEN") {
      return handleRefreshFlow(endpoint, options);
    }

    // Handle API Errors
    if (!response.ok || (data && data.success === false)) {
      throw normalizeError(response, data);
    }

    logger.info(`[API Success] ${endpoint}`, data);
    return data;
  } catch (error) {
    if (error.name === "TypeError") logger.error("Network Error", error);
    throw error;
  }
};

/**
 * Logic to handle token refresh and retry original request
 */
async function handleRefreshFlow(endpoint, options) {
  const { clearAuth, updateAccessToken } = useAuthStore.getState();

  if (!isRefreshing) {
    isRefreshing = true;
    try {
      const resp = await fetch(`${BASE_URL}/auth/refresh`, {
        method: "POST",
        credentials: "include",
      });
      const data = await resp.json();

      if (resp.ok && data.accessToken) {
        updateAccessToken(data.accessToken);
        isRefreshing = false;
        onTokenRefreshed(data.accessToken);
      } else {
        throw new Error("Refresh failed");
      }
    } catch (err) {
      isRefreshing = false;
      clearAuth();
      window.location.href = "/auth/login";
      throw err;
    }
  }

  // Queue this request until the refresh is done
  return new Promise((resolve) => {
    subscribeTokenRefresh((newToken) => {
      resolve(apiClient(endpoint, options));
    });
  });
}

/**
 * Converts response data into a standard Error object
 */
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

export default apiClient;
