import { baseFetch } from "./baseFetch.api";

export const ordersApi = {
  getUserOrders: () => baseFetch("/orders"),

  getAllOrders: () => baseFetch("/admin/orders"),
  
  patchOrder: (orderId, payload) =>
    baseFetch(`/admin/orders/${orderId}`, {
      method: "PATCH",
      ...(payload ? { body: JSON.stringify(payload) } : {}),
    }),
};
