import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrder } from "../../api";

export const useUpdateOrderMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (payload) => updateOrder(payload),
    onSuccess: (_, variables) => {
      qc.invalidateQueries({ queryKey: ["orders", variables.id] });
      qc.invalidateQueries({ queryKey: ["orders"] });
      qc.invalidateQueries({ queryKey: ["products"] });
    },
  });
};
