import { toast } from "@lib/toast";

export const razorpayCheckoutHandler = (apiResponse, handlers) => {
  const { navigate, mutateCart, orderId } = handlers;
  toast.success("Payment completed successfully!");

  const { razorpay_payment_id } = apiResponse;

  mutateCart();

  navigate("/orders/success", {
    state: {
      orderId,
      razorpayPaymentId: razorpay_payment_id,
    },
  });
};
