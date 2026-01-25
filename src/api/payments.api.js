import { baseFetch } from "./baseFetch.api";

export const paymentsApi = {
  /**
   * creates order at backend and returns order id
   */
  createPaymentIntent: (cartList) =>
    baseFetch("/payments/create", {
      method: "POST",
      body: JSON.stringify(cartList),
    }),

  /**
   * - verifies the payment
   * - creates order at backend
   */
  createOrder: ({
    items,
    razorpayOrderId,
    razorpayPaymentId,
    razorpaySignature,
  }) => {
    return baseFetch("/payments/verify", {
      method: "POST",
      body: JSON.stringify({
        items,
        paymentDetails: {
          razorpayOrderId,
          razorpayPaymentId,
          razorpaySignature,
        },
      }),
    });
  },
};

export default paymentsApi;
