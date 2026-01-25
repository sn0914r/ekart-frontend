import { auth } from "../configs/firebase";

const BASE_URL = "https://ekart-backend-9y0c.onrender.com";

const baseFetch = async (endPoint, options = {}) => {
  const url = `${BASE_URL}${endPoint}`;
  // TODO: the token will be generated on every api call, so FIX this one in v3
  const token = auth.currentUser ? await auth.currentUser.getIdToken() : null;

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

  const res = await fetch(url, configs);
  const data = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(data?.message || "Something went wrong");
  }

  return data;
};

/**
 * Used for productuploads
 */
const baseFetchMultipart = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;

  // TODO: the token will be generated on every api call, so FIX this one in v2
  const token = auth.currentUser ? await auth.currentUser.getIdToken() : null;
  console.log(token);

  const config = {
    ...options,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  };
  console.log(url);
  const res = await fetch(url, config);
  const data = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(data?.message || "Something went wrong");
  }

  return data;
};

export { baseFetch, baseFetchMultipart };
