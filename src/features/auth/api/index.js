import api from "@lib/apiClient";

export const register = async ({ name, email, password }) => {
  return await api("/auth/register", {
    method: "POST",
    body: {
      name,
      email,
      password,
    },
  });
};

export const login = async ({ email, password }) => {
  return await api("/auth/login", {
    method: "POST",
    body: {
      email,
      password,
    },
  });
};

export const logout = async () => {
  return await api("/auth/logout", {
    method: "POST",
  });
};
