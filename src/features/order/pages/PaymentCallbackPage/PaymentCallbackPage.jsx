import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "@lib/toast";
import { useClearCartMutation } from "@features/cart/hooks/api/useClearCartMutation";

const PaymentCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { mutate: mutateCart } = useClearCartMutation();

  useEffect(() => {
    // Cashfree sends order_id and cf_order_id on redirect
    const orderId = searchParams.get("order_id");
    const cfOrderId = searchParams.get("cf_order_id");
    const orderStatus = searchParams.get("order_status");

    if (!orderId) {
      toast.error("Payment callback missing order info");
      navigate("/", { replace: true });
      return;
    }

    if (orderStatus === "PAID") {
      mutateCart();
      navigate("/orders/success", {
        replace: true,
        state: {
          orderId,
          razorpayPaymentId: cfOrderId || orderId,
        },
      });
    } else {
      // Payment was cancelled or failed
      toast.error(`Payment ${orderStatus?.toLowerCase() || "failed"}`);
      navigate("/checkout", { replace: true });
    }
  }, [searchParams, navigate, mutateCart]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
        background: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          border: "3px solid var(--color-primary)",
          borderTop: "3px solid transparent",
          borderRadius: "50%",
          animation: "spin 0.8s linear infinite",
        }}
      />
      <p style={{ fontFamily: "var(--font-sans)", opacity: 0.7 }}>
        Verifying your payment...
      </p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default PaymentCallbackPage;
