import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPayment } from "../../api";
import { ORDERS } from "../../constants/queryKeys";

export const useCreatePaymentMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (orderId) => createPayment({ orderId }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: [ORDERS] });
    },
  });
};
