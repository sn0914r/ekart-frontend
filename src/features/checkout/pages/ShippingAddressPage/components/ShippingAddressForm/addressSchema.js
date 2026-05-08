import { z as zod } from "zod";

const shippingAddressSchema = zod.object({
  name: zod.string().min(1, "Name is required"),
  address: zod.string().min(25, "Address is required"),
  phone: zod
    .string()
    .regex(/^\+91\d{10}$/, "Phone number must be a valid Indian number"),

  city: zod.string().min(1, "City is required"),
  state: zod.string().min(1, "State is required"),
  pincode: zod.string().regex(/^\d{6}$/, "Pincode must be 6 digits"),
});

export default shippingAddressSchema;
