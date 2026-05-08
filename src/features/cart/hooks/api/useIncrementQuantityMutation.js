import { useMutation, useQueryClient } from "@tanstack/react-query";
import { incrementQuantity } from "../../api";

export const useIncrementQuantityMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (pid) => incrementQuantity(pid),
    onSettled: () => qc.invalidateQueries({ queryKey: ["cart"] }),
  });
};
