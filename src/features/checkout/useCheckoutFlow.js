import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import OrderQuery from "@features/order/order.query";
import CartHooks from "@features/cart/cart.hooks";

import PaymentQuery from "./checkout.query";
import initCheckout from "./razorpay";
import { useAddress } from "./pages/ShippingAddressPage/useAddressStorage";

const useCheckoutFlow = () => {
  const navigate = useNavigate();
  const { getAddresses } = useAddress();
  const { cartItems } = CartHooks.useCartData();
  const { mutate: clearCart } = CartHooks.useClearCart();

  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const postOrderMutation = OrderQuery.usePostOrder();
  const createPaymentMutation = PaymentQuery.useCreatePayment();
  const verifyPaymentMutation = PaymentQuery.useVerifyPayment();

  const addresses = getAddresses();

  const navigateToAddressForm = () => navigate("/checkout/shipping-address");

  const handlePayment = async () => {
    if (!selectedAddress) return;

    setIsProcessing(true);
    const items = cartItems.map((item) => ({
      productId: item.productId,
      quantity: item.quantity,
    }));
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
