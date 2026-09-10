import { z as zod } from "zod";

const resetPasswordSchema = zod
  .object({
    newPassword: zod
      .string()
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: zod
      .string()
      .min(6, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default resetPasswordSchema;
