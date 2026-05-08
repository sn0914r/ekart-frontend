import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromCart } from "../../api";

export const useRemoveFromCartMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (pid) => removeFromCart(pid),
    onSettled: () => qc.invalidateQueries({ queryKey: ["cart"] }),
  });
};
