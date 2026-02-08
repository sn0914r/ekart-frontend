import { z as zod } from "zod";

export const productSchema = zod.object({
  name: zod
    .string()
    .min(1, "Product name is required")
    .max(100, "Product name must be less than 100 characters")
    .trim(),
  price: zod
    .number({ invalid_type_error: "Price must be a number" })
    .positive("Price must be greater than 0")
    .max(1000000, "Price must be less than 1,000,000"),
  stock: zod
    .number({ invalid_type_error: "Stock must be a number" })
    .int("Stock must be a whole number")
    .min(0, "Stock must be 0 or greater")
    .max(100000, "Stock must be less than 100,000"),
  isActive: zod.boolean().default(true),
});

export const productSchemaWithImage = productSchema.extend({
  image: zod
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Product image is required")
    .refine(
      (files) => files[0]?.size <= 5 * 1024 * 1024,
      "Image size must be less than 5MB",
    )
    .refine(
      (files) =>
        ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
          files[0]?.type,
        ),
      "Only .jpg, .jpeg, .png and .webp formats are supported",
    ),
});
