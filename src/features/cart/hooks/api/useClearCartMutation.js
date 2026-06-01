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
        if (!old || !old.cart) return old;
        return {
          ...old,
          cart: {
            ...old.cart,
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
    onSettled: () => qc.invalidateQueries({ queryKey: ["cart"] }),
  });
};
