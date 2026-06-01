import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromCart } from "../../api";

export const useRemoveFromCartMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (pid) => removeFromCart(pid),
    onMutate: async (pid) => {
      await qc.cancelQueries({ queryKey: ["cart"] });

      const previousCart = qc.getQueryData(["cart"]);

      qc.setQueryData(["cart"], (old) => {
        if (!old || !old.cart) return old;
        return {
          ...old,
          cart: {
            ...old.cart,
            items: old.cart.items.filter((item) => item.productId !== pid),
          },
        };
      });

      return { previousCart };
    },
    onError: (err, pid, context) => {
      if (context?.previousCart) {
        qc.setQueryData(["cart"], context.previousCart);
      }
    },
    onSettled: () => qc.invalidateQueries({ queryKey: ["cart"] }),
  });
};
