import { toast } from "@lib/toast";
import { useGetWishlist } from "../api/useGetWishlistQuery";
import { useRemoveWishlistMutation } from "../api/useRemoveFromWishlistMutation";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@app/store/authStore";

export const useWishlist = () => {
  const { data: serverWishlist, isLoading } = useGetWishlist();
  const wishlist = serverWishlist?.data ?? [];

  const isItem = (productId) => {
    return wishlist.some((item) => item.productId === productId);
  };

  const { mutate } = useRemoveWishlistMutation();
  const removeItem = (productId) => {
    const onSuccess = () => toast.success("Removed from Wishlist");
    const onError = () => toast.error("Failed to remove Item");

    mutate(productId, onSuccess, onError);
  };

  // INFO: just passing things through useWishlist
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const navigate = useNavigate();

  return {
    wishlist,
    isLoading,
    isItem,
    removeItem,
    isAuthenticated,
    navigate,
  };
};
