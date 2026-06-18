import { paymentFailure } from "@features/checkout/api";
import { ORDERS } from "@features/checkout/constants/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const usePaymentFailureMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (payload) => paymentFailure(payload),
    onSettled: () => qc.invalidateQueries({ queryKey: [ORDERS] }),
  });
};
