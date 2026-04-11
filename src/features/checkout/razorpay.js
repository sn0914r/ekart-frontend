const initCheckout = ({ amount, razorpayOrderId, handler }) => {
  const RAZORPAY_TEST_API_KEY = import.meta.env.VITE_RAZORPAY_KEY;

  const OPTIONS = {
    key: RAZORPAY_TEST_API_KEY,
    amount,
    currency: "INR",
    name: "eKart",
    image: "https://ekart.s3.ap-south-1.amazonaws.com/ekart-logo.png",
    order_id: razorpayOrderId,
    handler,
  };

  const rzp = new window.Razorpay(OPTIONS);
  rzp.open();
};

export default initCheckout;
