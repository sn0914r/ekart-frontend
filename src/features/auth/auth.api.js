import apiClient from "@lib/apiClient";

const signUpUser = async (payload) => {
  return await apiClient("/auth/register", {
    method: "POST",
    body: payload,
  });
};

const loginUser = async (payload) => {
  return await apiClient("/auth/login", {
    method: "POST",
    body: payload,
  });
};

const logoutUser = async () => {
  return await apiClient("/auth/logout", {
    method: "POST",
  });
};

export default {
  signUpUser,
  loginUser,
  logoutUser,
};
