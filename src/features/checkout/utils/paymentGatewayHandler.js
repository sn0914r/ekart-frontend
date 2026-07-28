import { toast } from "@lib/toast";
import { openRazorpayCheckout } from "./openRazorpayCheckout";

export const handlePaymentGateway = ({
  data,
  finalOrderId,
  method,
  handlers,
}) => {
  const {
    gateway,
    paymentLink,
    razorpayKeyId,
    orderId: rzpOrderId,
    paymentId,
  } = data;

  const {
    setIsProcessing,
    setIsWaitingForCashfree,
    setCashfreeOrderId,
    startPolling,
    mutateCart,
    navigate,
    handlePaymentFailure,
  } = handlers;

  if (gateway === "cashfree") {
    setIsProcessing(false);
    setIsWaitingForCashfree(true);
    setCashfreeOrderId(finalOrderId);

    // INFO: Open the Cashfree Modal properly using SDK
    try {
      const cashfree = window.Cashfree({ mode: "sandbox" });
      cashfree
        .checkout({
          paymentSessionId: paymentLink,
          redirectTarget: "_modal",
        })
        .catch(() => {}); // INFO: ignore promise errors since we are polling
    } catch (err) {
      console.error("Cashfree SDK error", err);
    }

    // INFO: Start polling the backend in the background
    startPolling({
      orderId: finalOrderId,
      paymentLink,
      cfPaymentId: paymentId,
      onPaid: ({ orderId: paidOrderId, cfPaymentId }) => {
        setIsWaitingForCashfree(false);
        mutateCart();
        navigate("/orders/success", {
          state: {
            orderId: paidOrderId,
            razorpayPaymentId: cfPaymentId || paymentId || "cf_payment",
          },
        });
        setTimeout(() => window.location.reload(), 200);
      },
      onFailed: (reason) => {
        setIsWaitingForCashfree(false);
        toast.error(reason || "Payment verification failed");
      },
    });
  } else if (gateway === "razorpay") {
    // INFO: using razorpayKeyId and orderId as requested
    openRazorpayCheckout(
      0, // INFO: amount is not required anymore with new POE if order_id has amount locked
      finalOrderId,
      rzpOrderId || paymentLink,
      {
        navigate,
        mutateCart,
        failurePaymentHandler: handlePaymentFailure,
        orderId: finalOrderId,
      },
      razorpayKeyId,
      method,
    );
  } else {
    toast.error("Unknown payment gateway");
  }
};
