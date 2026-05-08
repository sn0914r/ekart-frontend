import api from "@lib/apiClient";

export const getProductById = async (productId) => {
  return await api(`/products/${productId}`);
};

export const getProducts = async (queries = {}) => {
  const endPoint = `/products?${new URLSearchParams(queries).toString()}`;
  return await api(endPoint);
};

export const getProductColorsByName = async (productName) => {
  const endPoint = `/products/colors?name=${encodeURIComponent(productName)}`;
  return await api(endPoint);
};
