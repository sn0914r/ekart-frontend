const initCheckout = ({ amount, razorpayOrderId, handler }) => {
  const RAZORPAY_TEST_API_KEY = "rzp_test_SCUhUgcf4F5vO7";

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
