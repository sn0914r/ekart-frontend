import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useGetOrderQuery } from "../api/useGetOrderQuery";

export const useOrderSuccessPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const orderId = state?.orderId;
  const razorpayPaymentId = state?.razorpayPaymentId;

  const { data: orderResponse } = useGetOrderQuery(orderId);
  const order = orderResponse?.data;

  const totalAmount = state?.totalAmount || order?.subTotal;
  const email = state?.email || order?.email;

  useEffect(() => {
    if (!orderId || !razorpayPaymentId) {
      navigate("/", { replace: true });
    }
  }, [orderId, razorpayPaymentId, navigate]);

  return { orderId, razorpayPaymentId, totalAmount, email };
};
