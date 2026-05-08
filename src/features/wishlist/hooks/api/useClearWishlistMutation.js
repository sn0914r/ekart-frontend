import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clearWishlist } from "../../api";

export const useClearWishlistMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: clearWishlist,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["wishlist"] }),
  });
};
