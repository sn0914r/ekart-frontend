import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@lib/reactQuery";
import authAPI from "./auth.api";
import useAuthStore from "@store/authStore";
import { logger } from "@utils/logger";

const useLoginMutation = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: ({ email, password }) => authAPI.loginUser({ email, password }),
    onSuccess: (data) => {
      logger.info("Success data response: ", data);
      if (data?.accessToken) {
        setAuth(data.accessToken);
      }
      queryClient.invalidateQueries(["orders", "products"]);
    },
    onError: (error) => {
      logger.error("Login error: ", error);
    },
  });
};

const useSignUpMutation = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: ({ name, email, password }) =>
      authAPI.signUpUser({ name, email, password }),
    onSuccess: (data) => {
      if (data?.accessToken) {
        setAuth(data.accessToken);
      }
      queryClient.invalidateQueries(["orders", "products"]);
    },
  });
};

const useLogoutMutation = () => {
  const clearAuth = useAuthStore((state) => state.clearAuth);

  return useMutation({
    mutationFn: () => authAPI.logoutUser(),
    onSuccess: () => {
      clearAuth();
      queryClient.invalidateQueries(["orders", "products"]);
    },
  });
};

export default {
  useLoginMutation,
  useSignUpMutation,
  useLogoutMutation,
};
