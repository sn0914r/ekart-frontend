import { useCartContext } from "../../../cart/CartContext";
import { useAddress } from "./useAddress";
import { useState } from "react";
import AddressCard from "./components/AddressCard";
import Button from "../../../../shared/components/Button";
import { PageWrapper, SectionTitle, BackLink } from "./CheckoutPage.styles";
import { ArrowLeft } from "lucide-react";
import OrderSummaryCard from "./components/OrderSummaryCard";
import { useNavigate } from "react-router-dom";
import OrderQuery from "../../order.query";
import PaymentQuery from "./payment/payments.query";
import initCheckout from "./payment/razorpay";
import { toast } from "sonner";

const CheckoutPage = () => {
  const { getAddresses } = useAddress();
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const { getCartList, clearCart } = useCartContext();

  const navigate = useNavigate();
  const navigateToAddressForm = () => navigate("/orders/new-address");

  const addresses = getAddresses();

  const PostOrderMutation = OrderQuery.usePostOrder();
  const createPaymentMutation = PaymentQuery.useCreatePayment();
  const verifyPaymentMutation = PaymentQuery.useVerifyPayment();

  const handlePayment = async () => {
    if (!selectedAddress) return;

    setIsProcessing(true);
    const items = getCartList();
    const { id, ...address } = selectedAddress;

    try {
      const { orderId } = await PostOrderMutation.mutateAsync({
        items,
        shippingAddress: address,
      });

      const { razorpayOrderId, amount } =
        await createPaymentMutation.mutateAsync({
          orderId,
        });

      initCheckout({
        amount,
        razorpayOrderId,
        handler: async (response) => {
          const {
            razorpay_payment_id: razorpayPaymentId,
            razorpay_order_id: razorpayOrderId,
            razorpay_signature: razorpaySignature,
          } = response;
          const paymentDetais = await verifyPaymentMutation.mutateAsync({
            razorpayPaymentId,
            razorpaySignature,
            razorpayOrderId,
          });

          clearCart();
          navigate("/orders/success", {
            state: {
              orderDetails: paymentDetais,
            },
          });
        },
      });
    } catch (error) {
      toast.error(error.message);
    }

    setIsProcessing(false);
  };

  return (
    <PageWrapper>
      <div className="container">
        <BackLink onClick={() => navigate(-1)}>
          <ArrowLeft size={14} /> Back
        </BackLink>
        <div className="row g-5">
          {/* Left Column: Address Selection */}
          <div className="col-12 col-lg-8">
            <SectionTitle>Select Delivery Address</SectionTitle>

            {addresses.length > 0 ? (
              <div className="row g-3">
                {addresses.map((add) => (
                  <div className="col-12 col-md-6" key={add.id}>
                    <AddressCard
                      address={add}
                      isSelected={selectedAddress?.id === add.id}
                      onSelect={setSelectedAddress}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="alert alert-warning">
                No addresses found. Please add a shipping address to proceed.
              </div>
            )}
            <Button onClick={navigateToAddressForm}>Add Address</Button>
          </div>

          {/* Right Column: Order Summary */}
          <div className="col-12 col-lg-4">
            <div className="sticky-top" style={{ top: "2rem" }}>
              <OrderSummaryCard />
              <Button
                disabled={isProcessing || !selectedAddress}
                onClick={handlePayment}
                style={{ marginTop: "1.5rem" }}
              >
                {isProcessing ? "Processing..." : "Place Order"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CheckoutPage;
