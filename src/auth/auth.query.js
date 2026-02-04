import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../lib/reactQuery";

import authAPI from "./auth.api";
import { signInWithCustomToken } from "firebase/auth";
import { auth } from "../configs/firebase.config";

const useLogin = () => {
  return useMutation({
    mutationFn: ({ email, password }) => authAPI.loginUser({ email, password }),

    onSuccess: () => {
      alert("Logged in successfully");
      queryClient.invalidateQueries(["orders", "products"]);
    },

    onError: (error) => {
      console.log(error.message);
      alert(error.message);
    },
  });
};

const useSignUp = () => {
  return useMutation({
    mutationFn: async ({ name, email, password }) => {
      const token = await authAPI.signUpUser({ name, email, password });
      await signInWithCustomToken(auth, token);
    },
    onSuccess: () => {
      alert("SignUp successfull");
      queryClient.invalidateQueries(["orders", "products"]);
    },

    onError: (error) => {
      console.log(error.message);
      alert(error.message);
    },
  });
};

const useLogout = () => {
  return useMutation({
    mutationFn: () => authAPI.logoutUser(),
    onSuccess: () => {
      queryClient.invalidateQueries(["orders", "products"]);
    },
  });
};

export default {
  useLogin,
  useSignUp,
  useLogout,
};
