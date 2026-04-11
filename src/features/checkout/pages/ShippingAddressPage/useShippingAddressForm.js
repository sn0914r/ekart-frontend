import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import shippingAddressSchema from "./ShippingAddressPage.schema";
import { useAddress } from "./useAddressStorage";

const useShippingAddressForm = () => {
  const { setAddress } = useAddress();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(shippingAddressSchema),
  });

  const onSubmit = handleSubmit((data) => {
    setAddress(data);
    toast.success("Address saved successfully!");
    navigate("/checkout");
  });

  return { register, errors, onSubmit };
};

export { useShippingAddressForm };
