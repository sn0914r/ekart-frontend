import api from "@lib/apiClient";

export const getOrder = async (id) => {
  return await api(`/orders/${id}`);
};

export const getOrders = async () => {
  return await api("/orders");
};

export const createOrder = async ({ items, shippingAddress }) => {
  return await api("/orders", {
    method: "POST",
    body: { items, shippingAddress },
  });
};

/**
 * Updates Order status or Shipping status
 * @param {string} object.payload - {orderStatus: string || shippingAddress: object}
 * @param {string} object.id - orderId
 */
export const updateOrder = async ({ id, ...payload }) => {
  return await api(`/orders/${id}`, {
    method: "PATCH",
    body: payload,
  });
};
