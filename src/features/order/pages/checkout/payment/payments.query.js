import { useMutation } from "@tanstack/react-query";
import PaymentAPI from "./payment.api";
import { toast } from "sonner";

const useCreatePayment = () => {
  return useMutation({
    mutationFn: ({ orderId }) => PaymentAPI.createPaymentIntent(orderId),
    onSuccess: () => {
      toast.success("Order created successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create order");
    },
  });
};

const useVerifyPayment = () => {
  return useMutation({
    mutationFn: ({ razorpayPaymentId, razorpaySignature, razorpayOrderId }) => {
      toast.info("Verifying payment...");
      PaymentAPI.verifyPaymentAndConfirmOrder({
        razorpayPaymentId,
        razorpaySignature,
        razorpayOrderId,
      });
    },
    onSuccess: () => {
      toast.success("Payment verified successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to verify payment");
    },
  });
};

export default {
  useCreatePayment,
  useVerifyPayment,
};
