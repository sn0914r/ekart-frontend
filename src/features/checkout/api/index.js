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

export const paymentFailure = async ({
  orderId,
  razorpayOrderId,
  razorpayPaymentId,
  failureCode,
  failureReason,
  failureDescription,
}) => {
  return await api("/payments/failure", {
    method: "POST",
    body: {
      orderId,
      razorpayOrderId,
      razorpayPaymentId,
      failureCode,
      failureReason,
      failureDescription,
    },
  });
};

//  orderId,

//     razorpayOrderId: response.error.metadata.order_id,

//     razorpayPaymentId: response.error.metadata.payment_id,

//     failureCode: response.error.code,

//     failureReason: response.error.reason,

//     failureDescription: response.error.description,
