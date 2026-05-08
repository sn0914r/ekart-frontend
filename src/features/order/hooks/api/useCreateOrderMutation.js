import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "../../api";

export const useCreateOrderMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (payload) => createOrder(payload),
    onSuccess: ({ data }) => {
      if (data?.orderId) {
        qc.invalidateQueries({ queryKey: ["orders"] });
        return data.orderId;
      }
      throw new Error("Invalid order details received.");
    },
  });
};
