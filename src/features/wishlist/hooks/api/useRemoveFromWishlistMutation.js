import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromWishlist } from "../../api";

export const useRemoveWishlistMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (productId) => removeFromWishlist({ productId }),
    onMutate: async (productId) => {
      await qc.cancelQueries({ queryKey: ["wishlist"] });

      const previousWishlist = qc.getQueryData(["wishlist"]);

      qc.setQueryData(["wishlist"], (old) => {
        if (!old || !old.data) return old;
        return {
          ...old,
          data: old.data.filter((item) => item.productId !== productId),
        };
      });

      return { previousWishlist };
    },
    onError: (err, productId, context) => {
      if (context?.previousWishlist) {
        qc.setQueryData(["wishlist"], context.previousWishlist);
      }
    },
    onSettled: () => qc.invalidateQueries({ queryKey: ["wishlist"] }),
  });
};
