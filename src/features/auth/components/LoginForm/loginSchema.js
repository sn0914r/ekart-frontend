import { z as zod } from "zod";

const loginUserSchema = zod.object({
  email: zod
    .email("Invalid email address")
    .transform((val) => val.toLowerCase().trim()),
  password: zod.string().min(6, "Password must be at least 6 characters"),
});

export default loginUserSchema;
