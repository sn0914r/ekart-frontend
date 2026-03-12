import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { useAddress } from "./pages/checkout/useAddress";
import { useCartContext } from "../cart/CartContext";
import OrderQuery from "./order.query";
import PaymentQuery from "./pages/checkout/payment/payments.query";
import initCheckout from "./pages/checkout/payment/razorpay";

const useCheckoutFlow = () => {
  const navigate = useNavigate();
  const { getAddresses } = useAddress();
  const { getCartList, clearCart } = useCartContext();

  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const postOrderMutation = OrderQuery.usePostOrder();
  const createPaymentMutation = PaymentQuery.useCreatePayment();
  const verifyPaymentMutation = PaymentQuery.useVerifyPayment();

  const addresses = getAddresses();

  const navigateToAddressForm = () => navigate("/orders/new-address");

  const handlePayment = async () => {
    if (!selectedAddress) return;

    setIsProcessing(true);
    const items = getCartList();
    const { id, ...address } = selectedAddress;

    try {
      toast.loading("Creating order...");
      const {
        data: { orderId },
      } = await postOrderMutation.mutateAsync({
        items,
        shippingAddress: address,
      });
      toast.dismiss();

      const {
        data: { razorpayOrderId, amount },
      } = await createPaymentMutation.mutateAsync({ orderId });

      initCheckout({
        amount,
        razorpayOrderId,
        handler: async (response) => {
          try {
            toast.info("Verifying payment...");
            const {
              razorpay_payment_id: razorpayPaymentId,
              razorpay_order_id: razorpayOrderId,
              razorpay_signature: razorpaySignature,
            } = response;

            const {
              data: { orderId, razorpayPaymentId: verifiedRazorpayPaymentId },
            } = await verifyPaymentMutation.mutateAsync({
              razorpayPaymentId,
              razorpaySignature,
              razorpayOrderId,
            });

            toast.dismiss();
            toast.success("Payment verified successfully!");
            clearCart();

            navigate("/orders/success", {
              state: { orderId, razorpayPaymentId: verifiedRazorpayPaymentId },
            });
          } catch (error) {
            toast.dismiss();
            toast.error(error.message || "Payment verification failed");
            console.error("Payment verification failed: ", error);
          }
        },
      });
    } catch (error) {
      toast.dismiss();
      toast.error(error.message || "Failed to place order");
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    addresses,
    selectedAddress,
    setSelectedAddress,
    isProcessing,
    handlePayment,
    navigateToAddressForm,
  };
};

export { useCheckoutFlow };
