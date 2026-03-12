import { useMutation, useQuery } from "@tanstack/react-query";
import OrderAPI from "./orders.api";

const usePostOrder = () =>
  useMutation({
    mutationFn: ({ items, shippingAddress }) =>
      OrderAPI.createOrder({ items, shippingAddress }),
  });

const useGetOrders = () =>
  useQuery({
    queryKey: ["orders"],
    queryFn: () => OrderAPI.getOrders(),
  });

export default { usePostOrder, useGetOrders };
