import api from "@lib/apiClient";

export const getCart = async () => {
  return await api("/cart");
};

export const addToCart = async ({ productId, variant }) => {
  return api("/cart/add", {
    method: "POST",
    body: { productId, variant },
  });
};

export const incrementQuantity = async (productId) => {
  return await api("/cart/increase", { method: "PATCH", body: { productId } });
};

export const decrementQuantity = async (productId) => {
  return await api("/cart/decrease", { method: "PATCH", body: { productId } });
};

export const removeFromCart = async (productId) => {
  return await api(`/cart/remove/${productId}`, { method: "DELETE" });
};

export const clearCart = async () => {
  return await api("/cart/clear", { method: "DELETE" });
};
