import api from "@lib/apiClient";

export const createPayment = async ({ orderId }) => {
  return await api("/payments/create", {
    method: "POST",
    body: { orderId },
  });
};

export const paymentSuccess = async ({
  razorpayOrderId,
  razorpayPaymentId,
  razorpaySignature,
}) => {
  return await api("/payments/verify", {
    method: "POST",
    body: {
      razorpayOrderId,
      razorpayPaymentId,
      razorpaySignature,
    },
  });
};
