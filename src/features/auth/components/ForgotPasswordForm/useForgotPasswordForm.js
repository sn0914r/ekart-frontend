import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "@lib/toast";

import forgotPasswordSchema from "./forgotPasswordSchema";
import { useForgotPasswordMutation } from "../../hooks/api/useForgotPasswordMutation";

export default function useForgotPasswordForm() {
  const navigate = useNavigate();
  const forgotPasswordMutation = useForgotPasswordMutation();

  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [countdown, setCountdown] = useState(10);

  const form = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      toast.info("Sending reset link...");
      const response = await forgotPasswordMutation.mutateAsync({
        email: data.email,
      });

      const message =
        response?.message || "Password reset link sent successfully";
      toast.success(message);
      setSuccessMessage(message);
      setSubmittedEmail(data.email);
      setIsSuccess(true);
      setCountdown(10);
    } catch (error) {
      if (error.validationErrors?.length) {
        error.validationErrors.forEach(({ field, message }) => {
          form.setError(field, { message });
        });
      } else {
        toast.error(error.message || "Failed to request password reset");
      }
    }
  });

  const handleReset = () => {
    setIsSuccess(false);
    setSubmittedEmail("");
    setCountdown(10);
  };

  const handleResend = async () => {
    if (!submittedEmail) return;
    try {
      toast.info("Resending reset link...");
      await forgotPasswordMutation.mutateAsync({ email: submittedEmail });
      toast.success("Reset link sent again");
      setCountdown(10);
    } catch (error) {
      toast.error(error.message || "Failed to resend reset link");
    }
  };

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

  return {
    register: form.register,
    errors: form.formState.errors,
    isSubmitting:
      form.formState.isSubmitting || forgotPasswordMutation.isPending,
    onSubmit,
    isSuccess,
    successMessage,
    submittedEmail,
    countdown,
    handleGoHome,
    handleReset,
    handleResend,
  };
}
