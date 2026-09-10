import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../../api";

export const useForgotPasswordMutation = () => {
  return useMutation({
    mutationFn: (payload) => forgotPassword(payload),
  });
};
