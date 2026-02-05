import { useMutation } from "@tanstack/react-query";
import PaymentAPI from "./payment.api";

const useCreatePayment = () => {
  return useMutation({
    mutationFn: ({ orderId }) => PaymentAPI.createPaymentIntent(orderId),
  });
};

const useVerifyPayment = () => {
  return useMutation({
    mutationFn: ({ razorpayPaymentId, razorpaySignature, razorpayOrderId }) =>
      PaymentAPI.verifyPaymentAndConfirmOrder({
        razorpayPaymentId,
        razorpaySignature,
        razorpayOrderId,
      }),
  });
};

export default {
  useCreatePayment,
  useVerifyPayment,
};
