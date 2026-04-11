import { z as zod } from "zod";

const registerSchema = zod
  .object({
    name: zod.string("Name is required"),
    email: zod
      .email("Invalid email address")
      .transform((val) => val.toLowerCase().trim()),
    password: zod.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: zod.string().min(6, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default registerSchema;
