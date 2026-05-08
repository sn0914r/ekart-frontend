import { Outlet } from "react-router-dom";
import Image from "@assets/auth-layout.png";
import * as S from "./AuthLayout.styles";

const AuthLayout = () => {
  return (
    <S.FullHeightContainer className="container-fluid p-0">
      <S.RowWrapper className="row g-0">
        <div className="col-12 col-lg-6 d-none d-lg-block">
          <S.ImageWrapper>
            <img src={Image} alt="Auth Image" />
          </S.ImageWrapper>
        </div>

        <div className="col-12 col-lg-6">
          <S.FormSection>
            <S.FormContent>
              <Outlet />
            </S.FormContent>
          </S.FormSection>
        </div>
      </S.RowWrapper>
    </S.FullHeightContainer>
  );
};

export default AuthLayout;
