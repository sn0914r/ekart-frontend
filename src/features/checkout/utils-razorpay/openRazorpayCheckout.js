import { razorpayCheckoutHandler } from "./razorpayCheckoutHandler";

export const openRazorpayCheckout = (amount, order_id, handlers) => {
  const OPTIONS = {
    key: import.meta.env.VITE_RAZORPAY_KEY,
    name: "eKart",
    amount,
    currency: "INR",
    order_id,
    handler: (res) => razorpayCheckoutHandler(res, handlers),
    image: null,
  };

  const rzp = new window.Razorpay(OPTIONS);
  rzp.open();
};
