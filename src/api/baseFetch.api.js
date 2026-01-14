import { auth } from "../configs/firebase";

const BASE_URL = "http://localhost:3000";

const baseFetch = async (endPoint, options = {}) => {
  const url = `${BASE_URL}/${endPoint}`;
  // TODO: the token will be generated on every api call, so FIX this one in v2
  const token = auth.currentUser ? await auth.currentUser.getIdToken : null;

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

const baseFetchMultipart = async (endpoint, options = {}) => {
  const url = `${BASE_URL}/${endpoint}`;

  // TODO: the token will be generated on every api call, so FIX this one in v2
  const token = auth.currentUser ? await auth.currentUser.getIdToken : null;

  const config = {
    ...options,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  };

  const res = await fetch(url, config);
  const data = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(data?.message || "Something went wrong");
  }

  return data;
};

export { baseFetch, baseFetchMultipart };
