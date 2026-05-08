import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUpdateOrderMutation } from "../../../../hooks/api/useUpdateOrderMutation";

export const useShippingForm = ({ orderId, defaultValues, onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: defaultValues || {
      name: "",
      address: "",
      city: "",
      state: "",
      country: "India",
      pincode: "",
      phone: "",
    },
  });

  const { mutateAsync } = useUpdateOrderMutation();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await mutateAsync({
        id: orderId,
        shippingAddress: data,
      });
      toast.success("Shipping address updated successfully");
      if (onSuccess) onSuccess();
    } catch (error) {
      toast.error(error.message || "Failed to update shipping address");
    }
  });

  return { register, handleSubmit: onSubmit, errors, isSubmitting, reset };
};
