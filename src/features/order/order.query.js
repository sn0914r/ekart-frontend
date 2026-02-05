import { useMutation } from "@tanstack/react-query";
import OrderAPI from "./orders.api";

const usePostOrder = () =>
  useMutation({
    mutationFn: ({ items, shippingAddress }) =>
      OrderAPI.createOrder({ items, shippingAddress }),
  });

export default { usePostOrder };
