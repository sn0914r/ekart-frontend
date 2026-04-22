import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import OrderAPI from "./order.api";

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

const useGetOrder = (id) =>
  useQuery({
    queryKey: ["orders", id],
    queryFn: () => OrderAPI.getOrder(id),
    enabled: !!id,
  });

const useUpdateOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ...data }) => OrderAPI.updateOrder({ id, ...data }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["orders", variables.id] });
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export default { usePostOrder, useGetOrders, useGetOrder, useUpdateOrder };
