import Image from "../../assets/auth-layout.png";
import {
  FullHeightContainer,
  RowWrapper,
  ImageWrapper,
  FormSection,
  FormContent,
} from "./AuthLayout.styles";

const AuthLayout = ({ children }) => {
  return (
    <FullHeightContainer className="container-fluid p-0">
      <RowWrapper className="row g-0">
        {/* Image Section */}
        <div className="col-12 col-lg-6 d-none d-lg-block">
          <ImageWrapper>
            <img src={Image} alt="Auth" />
          </ImageWrapper>
        </div>
        {/* Form Section */}
        <div className="col-12 col-lg-6">
          <FormSection>
            <FormContent>{children}</FormContent>
          </FormSection>
        </div>
      </RowWrapper>
    </FullHeightContainer>
  );
};

export default AuthLayout;
