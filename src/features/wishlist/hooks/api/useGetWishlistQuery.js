import useAuthStore from "@app/store/authStore";
import { useQuery } from "@tanstack/react-query";
import { getWishList } from "../../api";

export const useGetWishlist = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishList,
    enabled: isAuthenticated,
  });
};
