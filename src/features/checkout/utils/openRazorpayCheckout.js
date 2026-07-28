import { razorpayCheckoutHandler } from "./razorpayCheckoutHandler";

export const openRazorpayCheckout = (
  amount,
  orderId,
  razorpayOrderId,
  handlers,
  customKey,
  method
) => {
  let lastFailedPaymentId = null;

  // INFO: Map our frontend method names to Razorpay method names
  const rzpMethodMap = {
    upi: "upi",
    card: "card",
    netbanking: "netbanking",
    wallet: "wallet"
  };
  
  const rzpMethod = rzpMethodMap[method] || "upi";

  const OPTIONS = {
    key: customKey || import.meta.env.VITE_RAZORPAY_KEY,
    name: "eKart",
    amount,
    currency: "INR",
    order_id: razorpayOrderId,
    handler: (res) => razorpayCheckoutHandler(res, handlers),
    image: null,
    config: {
      display: {
        blocks: {
          custom: {
            name: "Payment Method",
            instruments: [
              { method: rzpMethod }
            ]
          }
        },
        sequence: ["block.custom"],
        preferences: {
          show_default_blocks: false
        }
      }
    }
  };

  const rzp = new window.Razorpay(OPTIONS);

  rzp.on("payment.failed", async (response) => {
    const paymentId = response.error.metadata.payment_id;
    
    // INFO: Prevent duplicate event triggers for the same failed payment attempt
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
