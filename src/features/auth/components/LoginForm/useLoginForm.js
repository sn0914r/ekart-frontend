import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import loginUserSchema from "./loginSchema";
import { useLoginMutation } from "../../hooks/api/useLoginMutation";

export default function useLoginForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const loginMutation = useLoginMutation();

  const emailParam = searchParams.get("email");
  const passwordParam = searchParams.get("password");

  const form = useForm({
    resolver: zodResolver(loginUserSchema),
    defaultValues: {
      email: emailParam || "",
      password: passwordParam || "",
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      toast.info("Logging in...");
      await loginMutation.mutateAsync({
        email: data.email,
        password: data.password,
      });
      toast.success("Logged in successfully");
      const redirectTo = searchParams.get("redirectTo") || "/";
      navigate(redirectTo);
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

  const hasAutoLogged = useRef(false);

  useEffect(() => {
    if (emailParam && passwordParam && !hasAutoLogged.current) {
      hasAutoLogged.current = true;
      const autoLogin = async () => {
        try {
          toast.info("Auto logging in...");
          await loginMutation.mutateAsync({
            email: emailParam,
            password: passwordParam,
          });
          toast.success(`Automatically authenticated as ${emailParam}`);
          const redirectTo = searchParams.get("redirectTo") || "/";
          navigate(redirectTo);
        } catch (error) {
          toast.error(error.message || "Failed to auto-login");
        }
      };
      autoLogin();
    }
  }, [emailParam, passwordParam, loginMutation, navigate]);

  return {
    register: form.register,
    errors: form.formState.errors,
    isSubmitting: form.formState.isSubmitting || (!!(emailParam && passwordParam) && loginMutation.isPending),
    onSubmit,
  };
}
