import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { loginUserSchema, signUpUserSchema } from "./auth.schema";
import authQuery from "./auth.query";

export const useLoginForm = () => {
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
};

export const useSignUpForm = () => {
  const navigate = useNavigate();
  const signUpMutation = authQuery.useSignUpMutation();

  const form = useForm({
    resolver: zodResolver(signUpUserSchema),
  });

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      toast.info("Creating account...");
      await signUpMutation.mutateAsync({
        name: data.name,
        email: data.email,
        password: data.password,
      });
      toast.success("Signed up successfully");
      navigate("/");
    } catch (error) {
      if (error.validationErrors?.length) {
        error.validationErrors.forEach(({ field, message }) => {
          form.setError(field, { message });
        });
      } else {
        toast.error(error.message || "Failed to sign up");
      }
    }
  });

  return {
    register: form.register,
    errors: form.formState.errors,
    isSubmitting: form.formState.isSubmitting,
    onSubmit,
  };
};
