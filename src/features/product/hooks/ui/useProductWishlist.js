import { useNavigate } from "react-router-dom";
import { toast } from "@lib/toast";
import useAuthStore from "@app/store/authStore";
import { useWishlist } from "@features/wishlist/hooks/ui/useWishlist";
import { useAddToWishlist } from "@features/wishlist/hooks/api/useAddToWishlistMutation";
import { useRemoveWishlistMutation } from "@features/wishlist/hooks/api/useRemoveFromWishlistMutation";

export const useProductWishlist = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const { isItem } = useWishlist();
  const { mutate: addToWishlist } = useAddToWishlist();
  const { mutate: removeWishlistProduct } = useRemoveWishlistMutation();

  const handleToggleWishlist = (productId) => {
    if (!isAuthenticated) {
      toast.info("Please login to add to your wishlist", {
        action: { label: "Login", onClick: () => navigate("/auth/login") },
      });
      return;
    }
    if (isItem(productId)) {
      removeWishlistProduct(productId);
    } else {
      addToWishlist(productId);
    }
  };

  return {
    handleToggleWishlist,
    checkItem: isItem,
  };
};
