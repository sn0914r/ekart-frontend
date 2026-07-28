import { useMutation, useQueryClient } from "@tanstack/react-query";
import { initiatePayment } from "../../api";
import { ORDERS } from "../../constants/queryKeys";

export const useInitiatePaymentMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({ orderId, method, returnUrl }) => initiatePayment({ orderId, method, returnUrl }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: [ORDERS] });
    },
  });
};
