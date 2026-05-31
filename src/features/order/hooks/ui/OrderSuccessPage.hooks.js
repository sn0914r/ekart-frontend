import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const useOrderSuccessPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  
  const orderId = state?.orderId;
  const razorpayPaymentId = state?.razorpayPaymentId;
  const totalAmount = state?.totalAmount;
  const email = state?.email;

  useEffect(() => {
    if (!orderId || !razorpayPaymentId) {
      navigate("/", { replace: true });
    }
  }, [orderId, razorpayPaymentId, navigate]);

  return { orderId, razorpayPaymentId, totalAmount, email };
};
