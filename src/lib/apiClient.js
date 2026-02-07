import { auth } from "../configs/firebase.config";

const BASE_URL = "http://localhost:3000";
// const BASE_URL = "https://coleman-constantly-midlands-hong.trycloudflare.com";
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
    throw new Error(data?.message || "Something went wrong");
  }

  return data;
};

export default apiClient;
