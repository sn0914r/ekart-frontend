import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToWishlist } from "../../api";

export const useAddToWishlist = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (productId) => addToWishlist({ productId }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["wishlist"] }),
  });
};
