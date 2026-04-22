import { z } from "zod";

export const shippingAddressSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name is too long"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  country: z.string().min(2, "Country is required"),
  pincode: z.string().min(5, "Valid pincode is required"),
});
