import { razorpayCheckoutHandler } from "./razorpayCheckoutHandler";

export const openRazorpayCheckout = (
  amount,
  orderId,
  razorpayOrderId,
  handlers,
) => {
  let lastFailedPaymentId = null;

  const OPTIONS = {
    key: import.meta.env.VITE_RAZORPAY_KEY,
    name: "eKart",
    amount,
    currency: "INR",
    order_id: razorpayOrderId,
    handler: (res) => razorpayCheckoutHandler(res, handlers),
    image: null,
  };

  const rzp = new window.Razorpay(OPTIONS);

  rzp.on("payment.failed", async (response) => {
    const paymentId = response.error.metadata.payment_id;
    
    // Prevent duplicate event triggers for the same failed payment attempt
    if (lastFailedPaymentId === paymentId) return;
    lastFailedPaymentId = paymentId;

    const payload = {
      orderId,
      razorpayOrderId: response.error.metadata.order_id,
      razorpayPaymentId: paymentId,
      failureCode: response.error.code,
      failureReason: response.error.reason,
      failureDescription: response.error.description,
    };

    await handlers.failurePaymentHandler(payload);
  });

  rzp.open();
};
