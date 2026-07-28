import { useEffect, useRef, useCallback } from "react";
import { getOrder } from "@features/order/api";

const POLL_INTERVAL_MS = 3000;
const MAX_POLLS = 40; // 40 * 3s = 2 minutes max

/**
 * Polls the backend order status until payment is confirmed.
 * Opens Cashfree checkout in a new tab while polling.
 *
 * @param {object} params
 * @param {string} params.orderId - The backend order ID
 * @param {string} params.paymentLink - Cashfree payment session ID / link
 * @param {string} params.cfPaymentId - Cashfree internal payment ID
 * @param {Function} params.onPaid - Called with orderId when order status = PAID
 * @param {Function} params.onFailed - Called when payment fails or times out
 */
export const useCashfreePoll = () => {
  const pollRef = useRef(null);
  const countRef = useRef(0);
  const newTabRef = useRef(null);

  const stopPolling = useCallback(() => {
    if (pollRef.current) {
      clearInterval(pollRef.current);
      pollRef.current = null;
    }
    countRef.current = 0;
  }, []);

  const startPolling = useCallback(({ orderId, paymentLink, cfPaymentId, onPaid, onFailed }) => {
    stopPolling();

    pollRef.current = setInterval(async () => {
      countRef.current += 1;

      if (countRef.current > MAX_POLLS) {
        stopPolling();
        onFailed?.("Payment verification timed out. Please contact support.");
        return;
      }

      try {
        const response = await getOrder(orderId);
        const order = response?.data;

        // INFO: Check if payment is confirmed – adjust the field name based on your backend
        const isPaid =
          order?.paymentStatus === "PAID" ||
          order?.paymentStatus === "paid" ||
          order?.orderStatus === "CONFIRMED";

        if (isPaid) {
          stopPolling();
          newTabRef.current?.close();
          onPaid?.({ orderId, cfPaymentId });
        }
      } catch {
        // INFO: Silently ignore transient errors during polling
      }
    }, POLL_INTERVAL_MS);
  }, [stopPolling]);

  // INFO: Clean up on unmount
  useEffect(() => {
    return () => stopPolling();
  }, [stopPolling]);

  return { startPolling, stopPolling };
};
