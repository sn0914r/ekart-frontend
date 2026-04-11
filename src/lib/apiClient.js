import { auth } from "./firebase.config";

const BASE_URL = import.meta.env.VITE_API_URL;

/**
 * @desc function to make api calls
 *
 * @param {string} endPoint
 * @param {object} options
 * @param {boolean} requireToken
 *
 * @returns {Promise<object | object[]>}
 */
const apiClient = async (endPoint, options = {}, requireToken = true) => {
  const url = `${BASE_URL}${endPoint}`;
  let token = null;

  if (requireToken) {
    token = auth.currentUser ? await auth.currentUser.getIdToken() : null;
  }
  // detect FormData
  const isFormData = options.body instanceof FormData;

  // auto stringify JSON body
  if (options.body && !isFormData && typeof options.body !== "string") {
    options.body = JSON.stringify(options.body);
  }

  const headers = {
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(isFormData ? {} : { "Content-Type": "application/json" }),
    ...(options.headers || {}),
  };

  const configs = {
    ...options,
    headers,
  };
  const response = await fetch(url, configs);
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const normalizedError = {
      message: data?.message || "Something went wrong",
      code: data?.errorCode || "UNKNOWN_ERROR",
      validationErrors: data?.errors || null,
      status: response.status,
    };

    const err = new Error(normalizedError.message);
    Object.assign(err, normalizedError);
    throw err;
  }
  return data;
};

export default apiClient;
