import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../api";
import useAuthStore from "@app/store/authStore";

export const useCartQuery = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
    enabled: isAuthenticated,
  });
};
