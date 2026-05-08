import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromWishlist } from "../../api";

export const useRemoveWishlistMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (productId) => removeFromWishlist({ productId }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["wishlist"] }),
  });
};
