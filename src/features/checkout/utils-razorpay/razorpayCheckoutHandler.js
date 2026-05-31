import { toast } from "sonner";

export const razorpayCheckoutHandler = (apiResponse, handlers) => {
  const { navigate, mutatePayment, mutateCart } = handlers;
  toast.info("Please wait, we are verifying your payment");

  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    apiResponse;

  mutatePayment(
    {
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
      razorpaySignature: razorpay_signature,
    },
    {
      onError: (err) =>
        toast.error(err.message || "Payment Verification Error"),
      onSuccess: ({ data: state }) => {
        console.log("Data from agvdha", state);
        navigate("/orders/success", { state });
      },
      onSettled: () => mutateCart(),
    },
  );
};
