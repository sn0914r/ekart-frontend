import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clearCart } from "../../api";

export const useClearCartMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: clearCart,
    onSettled: () => qc.invalidateQueries({ queryKey: ["cart"] }),
  });
};
