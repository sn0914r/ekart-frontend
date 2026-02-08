import { useMutation, useQuery } from "@tanstack/react-query";
import OrderAPI from "./orders.api";
import { toast } from "sonner";

const usePostOrder = () =>
  useMutation({
    mutationFn: ({ items, shippingAddress }) => {
      toast.loading("Creating order...");
      return OrderAPI.createOrder({ items, shippingAddress });
    },
    onSuccess: () => {
      toast.dismiss();
      toast.success("Order created successfully!");
    },
    onError: (error) => {
      toast.dismiss();
      toast.error(error.message || "Failed to create order");
    },
  });

const useGetOrders = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: () => OrderAPI.getOrders(),
  });
};

export default { usePostOrder, useGetOrders };
