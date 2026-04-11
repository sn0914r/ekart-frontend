import apiClient from "@lib/apiClient";

const createOrder = ({ items, shippingAddress }) =>
  apiClient("/orders", {
    method: "POST",
    body: JSON.stringify({ items, shippingAddress }),
  });

const getOrders = () => apiClient("/orders");

export default {
  createOrder,
  getOrders,
};
