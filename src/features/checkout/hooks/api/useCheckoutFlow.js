import { useNavigate } from "react-router-dom";
import { useCreatePaymentMutation } from "./useCreatePaymentMutation";
import { useState } from "react";
import { toast } from "sonner";
import { openRazorpayCheckout } from "../../utils-razorpay/openRazorpayCheckout";
import { useCartQuery } from "@features/cart/hooks/api/useCartQuery";
import { useCreateOrderMutation } from "../../../order/hooks/api/useCreateOrderMutation";
import { usePaymentSuccessMutation } from "./usePaymentSuccessMutation";
import { useClearCartMutation } from "@features/cart/hooks/api/useClearCartMutation";
import { logger } from "@utils/logger";

export const useCheckoutFlow = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const { mutate: createOrder } = useCreateOrderMutation();
  const { mutate: createPayment } = useCreatePaymentMutation();
  const { mutate: mutatePayment } = usePaymentSuccessMutation();
  const { mutate: mutateCart } = useClearCartMutation();
  const { data: serverCart } = useCartQuery();

  const handleStartPayment = async (selectedAddress) => {
    if (!selectedAddress) {
      toast.error("Please select a shipping address");
      return;
    }

    const { id, ...shippingAddress } = selectedAddress;
    setIsProcessing(true);

    const cart = serverCart?.cart?.items ?? [];
    const cartMap = cart.map((item) => ({
      productId: item.productId,
      quantity: item.quantity,
    }));

    toast.loading("Creating order....");

    createOrder(
      { shippingAddress, items: cartMap },
      {
        onSuccess: (orderDetails) => {
          const orderId = orderDetails?.data?.orderId || orderDetails?.orderId;
          if (!orderId) {
            toast.error("Order Id not found");
            return;
          }

          createPayment(orderId, {
            onError: (err) =>
              toast.error(err.message || "Failed to create payment"),

            onSuccess: ({ data }) => {
              const { amount, razorpayOrderId } = data;
              openRazorpayCheckout(amount, razorpayOrderId, {
                navigate,
                mutatePayment,
                mutateCart,
              });
            },
          });
        },

        onError: (err) => toast.error(err.message || "Failed to create Order"),
        onSettled: () => setIsProcessing(false),
      },
    );
  };

  return { isProcessing, handleStartPayment };
};
