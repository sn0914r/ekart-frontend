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
        if (!old || !old.data) return old;
        return {
          ...old,
          data: {
            ...old.data,
            items: old.data.items.filter((item) => item.productId !== pid),
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
    onSuccess: (responseBody) => qc.setQueryData(["cart"], responseBody),
  });
};
