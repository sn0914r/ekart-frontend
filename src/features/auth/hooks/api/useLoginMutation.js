import useAuthStore from "@app/store/authStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "../../api";

export const useLoginMutation = () => {
  const setAuth = useAuthStore((state) => state.setAuth);
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (payload) => login(payload),
    onSuccess: ({ data }) => {
      const accessToken = data?.accessToken;
      if (accessToken) setAuth(accessToken);
      qc.invalidateQueries(["orders", "products", "cart", "wishlist"]);
    },
  });
};
