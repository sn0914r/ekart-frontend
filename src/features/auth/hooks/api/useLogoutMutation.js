import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../api";
import useAuthStore from "@app/store/authStore";

export const useLogoutMutation = () => {
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const qc = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: clearAuth,
    onSettled: () =>
      qc.invalidateQueries(["orders", "products", "cart", "wishlist"]),
  });
};
