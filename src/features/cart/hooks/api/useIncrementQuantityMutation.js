import { useMutation, useQueryClient } from "@tanstack/react-query";
import { incrementQuantity } from "../../api";

export const useIncrementQuantityMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (pid) => incrementQuantity(pid),
    onMutate: async (pid) => {
      await qc.cancelQueries({ queryKey: ["cart"] });

      const previousCart = qc.getQueryData(["cart"]);

      qc.setQueryData(["cart"], (old) => {
        if (!old || !old.data) return old;
        return {
          ...old,
          data: {
            ...old.data,
            items: old.data.items.map((item) =>
              item.productId === pid
                ? { ...item, quantity: item.quantity + 1 }
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
    onSuccess: (responseBody) => qc.setQueryData(["cart"], responseBody),
  });
};
