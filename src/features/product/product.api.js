import apiClient from "@lib/apiClient";

const getProductById = (id) => apiClient(`/products/${id}`, {}, false);
const getProductColors = (name) => apiClient(`/products/colors?name=${encodeURIComponent(name)}`, {}, false);

export default {
  getProductById,
  getProductColors,
};
