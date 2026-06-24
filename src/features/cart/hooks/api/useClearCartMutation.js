import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clearCart } from "../../api";

export const useClearCartMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: clearCart,
    onMutate: async () => {
      await qc.cancelQueries({ queryKey: ["cart"] });
      const previousCart = qc.getQueryData(["cart"]);

      qc.setQueryData(["cart"], (old) => {
        if (!old || !old.data) return old;
        return {
          ...old,
          data: {
            ...old.data,
            items: [],
          },
        };
      });

      return { previousCart };
    },
    onError: (err, variables, context) => {
      if (context?.previousCart) {
        qc.setQueryData(["cart"], context.previousCart);
      }
    },
    onSuccess: (responseBody) => qc.setQueryData(["cart"], responseBody),
  });
};
