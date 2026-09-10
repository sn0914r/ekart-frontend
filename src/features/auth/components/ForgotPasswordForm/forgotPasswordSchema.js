import { z as zod } from "zod";

const forgotPasswordSchema = zod.object({
  email: zod
    .email("Invalid email address")
    .transform((val) => val.toLowerCase().trim()),
});

export default forgotPasswordSchema;
