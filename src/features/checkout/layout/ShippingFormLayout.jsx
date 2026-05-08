import Image from "@assets/shipping-layout.png";
import * as S from "./ShippingFormLayout.styles";

const ShippingFormLayout = ({ children }) => {
  return (
    <S.FullHeightContainer className="container-fluid p-0">
      <S.RowWrapper className="row g-0">
        {/* Form Section */}
        <div className="col-12 col-lg-6">
          <S.FormSection>
            <S.FormContent>{children}</S.FormContent>
          </S.FormSection>
        </div>
        {/* Image Section */}
        <div className="col-12 col-lg-6 d-none d-lg-block">
          <S.ImageWrapper>
            <img src={Image} alt="Auth" />
          </S.ImageWrapper>
        </div>
      </S.RowWrapper>
    </S.FullHeightContainer>
  );
};

export default ShippingFormLayout;
