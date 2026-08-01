import { useNavigate } from "react-router-dom";
import ShippingAddressHeader from "./components/ShippingAddressHeader";
import ShippingAddressForm from "./components/ShippingAddressForm";
import CheckoutHeader from "../CheckoutPage/components/CheckoutHeader/CheckoutHeader";
import * as S from "./ShippingAddressPage.styles";
import shippingLayoutImage from "@assets/shipping-label-layout.png";

const ShippingAddressPage = () => {
  const navigate = useNavigate();

  return (
    <S.FullHeightContainer className="container-fluid p-0" style={{ position: 'relative' }}>
      <S.RowWrapper className="row g-0">
        <div className="col-12 col-lg-6 order-2 order-lg-1 position-relative">
          <S.HeaderOverlay className="container">
            <CheckoutHeader />
          </S.HeaderOverlay>
          <S.FormSection>
            <S.FormContent>
              <ShippingAddressHeader />
              <ShippingAddressForm />
            </S.FormContent>
          </S.FormSection>
        </div>
        
        <div className="col-12 col-lg-6 order-1 order-lg-2 d-none d-lg-flex flex-column">
          <S.ImageWrapper>
            <img src={shippingLayoutImage} alt="Premium shipping box with label" />
          </S.ImageWrapper>
        </div>
      </S.RowWrapper>
    </S.FullHeightContainer>
  );
};

export default ShippingAddressPage;
