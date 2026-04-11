import apiClient from "@lib/apiClient";

/**
 * @desc creates payment order at backend
 * @access private
 *
 * @param {string} orderId
 * @returns {Promise<{ razorpayOrderId: string,amount: number, currency: string}>}
 */
const createPaymentIntent = (orderId) =>
  apiClient("/payments/create", {
    method: "POST",
    body: JSON.stringify({ orderId }),
  });

/**
 * @desc verifies the payment and confirms the order
 * @access private
 *
 * @param {{ razorpayOrderId: string, razorpayPaymentId: string, razorpaySignature: string }} paymentDetails
 * @returns {Promise<{orderId: string, razorpayPaymentId: string}>}
 */
const verifyPaymentAndConfirmOrder = (paymentDetails) =>
  apiClient("/payments/verify", {
    method: "POST",
    body: JSON.stringify(paymentDetails),
  });

export default {
  createPaymentIntent,
  verifyPaymentAndConfirmOrder,
};
