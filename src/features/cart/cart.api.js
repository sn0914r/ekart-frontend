import apiClient from "../../lib/apiClient";

const getCart = () => apiClient("/cart");

const addToCart = (items) =>
  apiClient("/cart", { method: "PUT", body: { items } });

export default { getCart, addToCart };
