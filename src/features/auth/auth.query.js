import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../configs/reactQuery";
import authAPI from "./auth.api";

const useLoginMutation = () =>
  useMutation({
    mutationFn: ({ email, password }) => authAPI.loginUser({ email, password }),
    onSuccess: () => {
      queryClient.invalidateQueries(["orders", "products"]);
    },
  });

const useSignUpMutation = () =>
  useMutation({
    mutationFn: ({ name, email, password }) =>
      authAPI.signUpUser({ name, email, password }),
    onSuccess: () => {
      queryClient.invalidateQueries(["orders", "products"]);
    },
  });

const useLogoutMutation = () =>
  useMutation({
    mutationFn: () => authAPI.logoutUser(),
    onSuccess: () => {
      queryClient.invalidateQueries(["orders", "products"]);
    },
  });

export default {
  useLoginMutation,
  useSignUpMutation,
  useLogoutMutation,
};
