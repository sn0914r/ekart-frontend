import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../lib/reactQuery";

import authAPI from "./auth.api";
import { signInWithCustomToken } from "firebase/auth";
import { auth } from "../configs/firebase.config";
import { toast } from "sonner";

const useLogin = () => {
  return useMutation({
    mutationFn: ({ email, password }) => {
      toast.info("Logging in...");
      authAPI.loginUser({ email, password });
    },

    onSuccess: () => {
      toast.success("Logged in successfully");
      queryClient.invalidateQueries(["orders", "products"]);
    },

    onError: (error) => {
      toast.error(error.message || "Failed to login");
    },
  });
};

const useSignUp = () => {
  return useMutation({
    mutationFn: async ({ name, email, password }) => {
      toast.info("Creating account...");
      const token = await authAPI.signUpUser({ name, email, password });
      await signInWithCustomToken(auth, token);
    },
    onSuccess: () => {
      toast.success("Signed up successfully");
      queryClient.invalidateQueries(["orders", "products"]);
    },

    onError: (error) => {
      toast.error(error.message || "Failed to sign up");
    },
  });
};

const useLogout = () => {
  return useMutation({
    mutationFn: () => authAPI.logoutUser(),
    onSuccess: () => {
      queryClient.invalidateQueries(["orders", "products"]);
      toast.success("Logged out successfully");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to logout");
    },
  });
};

export default {
  useLogin,
  useSignUp,
  useLogout,
};
