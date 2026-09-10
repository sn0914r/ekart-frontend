import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../../api";

export const useResetPasswordMutation = () => {
  return useMutation({
    mutationFn: (payload) => resetPassword(payload),
  });
};
