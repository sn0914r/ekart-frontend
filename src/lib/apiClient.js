import { auth } from "../configs/firebase.config";

// const BASE_URL = "http://localhost:3000";
const BASE_URL = "https://usually-crucial-chen-desperate.trycloudflare.com";

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

  const defaultHeaders = {
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    "Content-Type": "application/json",
  };

  const configs = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...(options.headers || {}),
    },
  };

  console.table({
    url, configs
  })

  const response = await fetch(url, configs);
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || "Something went wrong");
  }

  return data;
};

export default apiClient;
