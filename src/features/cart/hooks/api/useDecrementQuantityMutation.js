import { useMutation, useQueryClient } from "@tanstack/react-query";
import { decrementQuantity } from "../../api";

export const useDecrementQuantityMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (pid) => decrementQuantity(pid),
    onSettled: () => qc.invalidateQueries({ queryKey: ["cart"] }),
  });
};
