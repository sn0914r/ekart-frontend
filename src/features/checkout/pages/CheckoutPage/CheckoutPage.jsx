import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import Button from "@shared/components/Button/Button";

import { useCheckoutFlow } from "../../useCheckoutFlow";
import AddressCard from "../../components/AddressCard/AddressCard";
import OrderSummaryCard from "../../components/OrderSummaryCard/OrderSummaryCard"

import { PageWrapper, SectionTitle, BackLink } from "./CheckoutPage.styles";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const {
    addresses,
    selectedAddress,
    setSelectedAddress,
    isProcessing,
    handlePayment,
    navigateToAddressForm,
  } = useCheckoutFlow();

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
