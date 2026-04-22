import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { shippingAddressSchema } from "./order.schema";
import OrderQuery from "./order.query";

export const useShippingForm = ({ orderId, defaultValues, onSuccess }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(shippingAddressSchema),
    defaultValues: defaultValues || {
      name: "",
      address: "",
      phone: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
    },
  });

  const updateOrderMutation = OrderQuery.useUpdateOrder();

  const onSubmit = (formData) => {
    updateOrderMutation.mutate(
      {
        id: orderId,
        shippingAddress: formData,
      },
      {
        onSuccess: () => {
          toast.success("Shipping address updated successfully");
          if (onSuccess) onSuccess();
        },
        onError: (error) => {
          toast.error(error.message || "Failed to update shipping address");
        },
      }
    );
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting: updateOrderMutation.isPending,
    reset,
  };
};
