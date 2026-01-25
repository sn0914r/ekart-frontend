import { baseFetch } from "./baseFetch.api";

export const authApi = {
  createUser: (formData) =>
    baseFetch("/auth/register", {
      method: "POST",
      body: JSON.stringify(formData),
    }),
  loginUserInfo: (credentials) =>
    baseFetch("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    }),
};
