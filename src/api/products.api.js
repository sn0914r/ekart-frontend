import { baseFetch, baseFetchMultipart } from "./baseFetch.api";

export const productsApi = {
  getAll: () => baseFetch("/products"),
  post: (formData) =>
    baseFetchMultipart("/products", {
      method: "POST",
      body: formData,
    }),
};
