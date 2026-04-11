import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";

import loginUserSchema from "./LoginPage.schema";
import authQuery from "../../auth.query";

export default function useLoginForm() {
  const navigate = useNavigate();
  const loginMutation = authQuery.useLoginMutation();

  const form = useForm({
    resolver: zodResolver(loginUserSchema),
  });

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      toast.info("Logging in...");
      await loginMutation.mutateAsync({
        email: data.email,
        password: data.password,
      });
      toast.success("Logged in successfully");
      navigate("/");
    } catch (error) {
      if (error.validationErrors?.length) {
        error.validationErrors.forEach(({ field, message }) => {
          form.setError(field, { message });
        });
      } else {
        toast.error(error.message || "Failed to login");
      }
    }
  });

  return {
    register: form.register,
    errors: form.formState.errors,
    isSubmitting: form.formState.isSubmitting,
    onSubmit,
  };
}
