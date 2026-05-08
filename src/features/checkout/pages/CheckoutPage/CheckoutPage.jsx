import { useCheckoutFlow } from "../../hooks/api/useCheckoutFlow";
import { useCheckoutAddress } from "../../hooks/ui/useCheckoutAddress";

import CheckoutHeader from "./components/CheckoutHeader";
import CheckoutSidebar from "./components/CheckoutSidebar";
import AddressSelection from "../ShippingAddressPage/components/AddressSelection";
import * as S from "./CheckoutPage.styles";

const CheckoutPage = () => {
  const { isProcessing, handleStartPayment } = useCheckoutFlow();
  const {
    addresses,
    selectedAddress,
    setSelectedAddress,
    navigateToAddressForm,
  } = useCheckoutAddress();

  return (
    <S.PageWrapper>
      <div className="container">
        <CheckoutHeader />

        <div className="row g-5">
          <div className="col-12 col-lg-8">
            <AddressSelection
              addresses={addresses}
              selectedAddress={selectedAddress}
              onSelectAddress={setSelectedAddress}
              onAddAddress={navigateToAddressForm}
            />
          </div>

          <div className="col-12 col-lg-4">
            <CheckoutSidebar
              isProcessing={isProcessing}
              canPlaceOrder={!!selectedAddress}
              onPlaceOrder={() => handleStartPayment(selectedAddress)}
            />
          </div>
        </div>
      </div>
    </S.PageWrapper>
  );
};

export default CheckoutPage;
