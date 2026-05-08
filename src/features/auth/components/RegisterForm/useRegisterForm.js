import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import registerSchema from "./registerSchema";
import { useRegisterMutation } from "../../hooks/api/useRegisterMutation";

export default function useRegister() {
  const navigate = useNavigate();
  const signUpMutation = useRegisterMutation();

  const form = useForm({
    resolver: zodResolver(registerSchema),
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
}
