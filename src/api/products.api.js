import { baseFetch, baseFetchMultipart } from "./baseFetch.api";

export const productsApi = {
  getAll: () => baseFetch("/products"),
  getAllAdmin: () => baseFetch("/admin/products"),
  post: (formData) =>
    baseFetchMultipart("/admin/products", {
      method: "POST",
      body: formData,
    }),
  patch: (id, payload) =>
    baseFetch(`/admin/products/${id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    }),
};
