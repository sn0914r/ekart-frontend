import { useMutation, useQueryClient } from "@tanstack/react-query";
import { paymentSuccess } from "../../api";
import { ORDERS } from "../../constants/queryKeys";

export const usePaymentSuccessMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (payload) => paymentSuccess(payload),
    onSettled: () => qc.invalidateQueries({ queryKey: [ORDERS] }),
  });
};
