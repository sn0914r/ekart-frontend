import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ShippingAddressHeader from "./components/ShippingAddressHeader";
import ShippingAddressForm from "./components/ShippingAddressForm";
import * as S from "./ShippingAddressPage.styles";
import shippingLayoutImage from "@assets/shipping-label-layout.png";

const ShippingAddressPage = () => {
  const navigate = useNavigate();

  return (
    <S.FullHeightContainer className="container-fluid p-0" style={{ position: 'relative' }}>
      <div 
        className="container" 
        style={{ 
          position: 'absolute', 
          top: '4rem', 
          left: 0, 
          right: 0, 
          zIndex: 10,
          pointerEvents: 'none'
        }}
      >
        <S.BackButton onClick={() => navigate(-1)} style={{ pointerEvents: 'auto' }}>
          <ArrowLeft size={16} /> Back
        </S.BackButton>
      </div>
      <S.RowWrapper className="row g-0">
        <div className="col-12 col-lg-6 order-2 order-lg-1">
          <S.FormSection>
            <S.FormContent>
              <ShippingAddressHeader />
              <ShippingAddressForm />
            </S.FormContent>
          </S.FormSection>
        </div>
        
        <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex flex-column">
          <S.ImageWrapper>
            <img src={shippingLayoutImage} alt="Premium shipping box with label" />
          </S.ImageWrapper>
        </div>
      </S.RowWrapper>
    </S.FullHeightContainer>
  );
};

export default ShippingAddressPage;
