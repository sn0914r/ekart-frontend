import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "@lib/toast";

import resetPasswordSchema from "./resetPasswordSchema";
import { useResetPasswordMutation } from "../../hooks/api/useResetPasswordMutation";

export default function useResetPasswordForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const resetPasswordMutation = useResetPasswordMutation();

  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [countdown, setCountdown] = useState(10);

  const form = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    if (!token) {
      toast.error("Password reset token is missing or invalid");
      return;
    }

    try {
      toast.info("Updating password...");
      const response = await resetPasswordMutation.mutateAsync({
        token,
        newPassword: data.newPassword,
      });

      const message = response?.message || "Password has been reset successfully";
      toast.success(message);
      setSuccessMessage(message);
      setIsSuccess(true);
      setCountdown(10);
    } catch (error) {
      if (error.validationErrors?.length) {
        error.validationErrors.forEach(({ field, message }) => {
          form.setError(field, { message });
        });
      } else {
        toast.error(error.message || "Failed to reset password");
      }
    }
  });

  useEffect(() => {
    if (!isSuccess) return;

    if (countdown <= 0) {
      navigate("/");
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isSuccess, countdown, navigate]);

  const handleGoHome = () => {
    navigate("/");
  };

  const handleRequestNewLink = () => {
    navigate("/forgot-password");
  };

  return {
    register: form.register,
    errors: form.formState.errors,
    isSubmitting: form.formState.isSubmitting || resetPasswordMutation.isPending,
    onSubmit,
    isSuccess,
    successMessage,
    countdown,
    handleGoHome,
    hasToken: Boolean(token),
    handleRequestNewLink,
  };
}
