import { useMutation, useQueryClient } from "@tanstack/react-query";
import { register } from "../../api";
import useAuthStore from "@app/store/authStore";

export const useRegisterMutation = () => {
  const setAuth = useAuthStore((state) => state.setAuth);
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (payload) => register(payload),
    onSuccess: ({ data }) => {
      const accessToken = data?.accessToken;
      if (accessToken) setAuth(accessToken);
      qc.invalidateQueries(["orders", "products", "cart", "wishlist"]);
    },
  });
};
