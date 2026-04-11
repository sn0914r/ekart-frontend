import { useMutation } from "@tanstack/react-query";
import PaymentAPI from "./checkout.api";

const useCreatePayment = () =>
  useMutation({
    mutationFn: ({ orderId }) => PaymentAPI.createPaymentIntent(orderId),
  });

const useVerifyPayment = () =>
  useMutation({
    mutationFn: ({ razorpayPaymentId, razorpaySignature, razorpayOrderId }) =>
      PaymentAPI.verifyPaymentAndConfirmOrder({
        razorpayPaymentId,
        razorpaySignature,
        razorpayOrderId,
      }),
  });

export default {
  useCreatePayment,
  useVerifyPayment,
};
