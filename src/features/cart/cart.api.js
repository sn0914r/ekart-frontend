import apiClient from "@lib/apiClient";

const getCart = () => apiClient("/cart");

const addToCart = (productId, variant) =>
  apiClient("/cart/add", { method: "POST", body: { productId, variant } });

const increaseQty = (productId) =>
  apiClient("/cart/increase", { method: "PATCH", body: { productId } });

const decreaseQty = (productId) =>
  apiClient("/cart/decrease", { method: "PATCH", body: { productId } });

const removeItem = (productId) =>
  apiClient(`/cart/remove/${productId}`, { method: "DELETE" });

const clearCart = () => apiClient("/cart/clear", { method: "DELETE" });

export default { getCart, addToCart, increaseQty, decreaseQty, removeItem, clearCart };
