import { useMutation, useQueryClient } from "@tanstack/react-query";
import { decrementQuantity } from "../../api";

export const useDecrementQuantityMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (pid) => decrementQuantity(pid),
    onMutate: async (pid) => {
      await qc.cancelQueries({ queryKey: ["cart"] });

      const previousCart = qc.getQueryData(["cart"]);

      qc.setQueryData(["cart"], (old) => {
        if (!old || !old.cart) return old;
        return {
          ...old,
          cart: {
            ...old.cart,
            items: old.cart.items.map((item) =>
              item.productId === pid
                ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                : item
            ),
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
