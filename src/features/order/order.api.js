import apiClient from "@lib/apiClient";

const createOrder = ({ items, shippingAddress }) =>
  apiClient("/orders", {
    method: "POST",
    body: JSON.stringify({ items, shippingAddress }),
  });

const getOrders = () => apiClient("/orders");

const getOrder = (id) => apiClient(`/orders/${id}`);

const updateOrder = ({ id, ...data }) =>
  apiClient(`/orders/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });

export default {
  createOrder,
  getOrders,
  getOrder,
  updateOrder,
};
