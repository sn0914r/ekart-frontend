import { useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "@lib/toast";
import { useInitiatePaymentMutation } from "../api/useInitiatePaymentMutation";
import { useClearCartMutation } from "@features/cart/hooks/api/useClearCartMutation";
import { useCashfreePoll } from "./useCashfreePoll";
import { handlePaymentGateway } from "../../utils/paymentGatewayHandler";

export const useInitatePayment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isProcessing, setIsProcessing] = useState(false);
  const { mutate: initiatePayment } = useInitiatePaymentMutation();
  const { mutate: mutateCart } = useClearCartMutation();
  const { startPolling } = useCashfreePoll();
  const [isWaitingForCashfree, setIsWaitingForCashfree] = useState(false);
  const [cashfreeOrderId, setCashfreeOrderId] = useState(null);

  const orderId = location.state?.orderId;

  const handlePaymentFailure = async (payload) => {
    toast.error(
      `Payment Failed: ${payload.failureDescription || "Unknown error"}`,
    );
  };

  const handleInitiatePayment = (method, dynamicOrderId) => {
    const finalOrderId = dynamicOrderId || orderId;

    if (!finalOrderId) {
      toast.error("Order ID is missing. Cannot initiate payment.");
      return;
    }

    setIsProcessing(true);
    const toastId = toast.loading("Initiating payment...");

    const returnUrl = `${window.location.origin}/orders/payment-callback`;

    initiatePayment(
      { orderId: finalOrderId, method, returnUrl },
      {
        onSuccess: (response) => {
          toast.dismiss(toastId);
          const data = response?.data || response;
          handlePaymentGateway({
            data,
            finalOrderId,
            method,
            handlers: {
              setIsProcessing,
              setIsWaitingForCashfree,
              setCashfreeOrderId,
              startPolling,
              mutateCart,
              navigate,
              handlePaymentFailure,
            },
          });
        },
        onError: (err) => {
          toast.error(err.message || "Failed to initiate payment", {
            id: toastId,
          });
        },
        onSettled: () => {
          setIsProcessing(false);
        },
      },
    );
  };

  return {
    handleInitiatePayment,
    isProcessing,
    orderId,
    isWaitingForCashfree,
    cashfreeOrderId,
  };
};
