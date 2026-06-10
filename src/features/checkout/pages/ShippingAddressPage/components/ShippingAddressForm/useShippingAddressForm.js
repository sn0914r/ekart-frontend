import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "@lib/toast";
import shippingAddressSchema from "./addressSchema";
import { useAddress } from "../../../../hooks/ui/useAddress";

export const useShippingAddressForm = () => {
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
