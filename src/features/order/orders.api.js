import apiClient from "../../lib/apiClient";

const createOrder = ({ items, shippingAddress }) =>
  apiClient("/orders", {
    method: "POST",
    body: JSON.stringify({ items, shippingAddress }),
  });

export default {
  createOrder,
};
