import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clearWishlist } from "../../api";

export const useClearWishlistMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: clearWishlist,
    onMutate: async () => {
      await qc.cancelQueries({ queryKey: ["wishlist"] });
      const previousWishlist = qc.getQueryData(["wishlist"]);

      qc.setQueryData(["wishlist"], (old) => {
        if (!old || !old.data) return old;
        return {
          ...old,
          data: [],
        };
      });

      return { previousWishlist };
    },
    onError: (err, variables, context) => {
      if (context?.previousWishlist) {
        qc.setQueryData(["wishlist"], context.previousWishlist);
      }
    },
    onSettled: () => qc.invalidateQueries({ queryKey: ["wishlist"] }),
  });
};
