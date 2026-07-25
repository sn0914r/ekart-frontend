import * as S from "./ProfileLayout.styles";

const ProfileLayout = ({ children, imageSrc, imageAlt }) => {
  return (
    <S.FullHeightContainer className="container-fluid p-0">
      <div className="row g-0 flex-grow-1">
        <div className="col-12 col-lg-6 d-flex">
          <S.ContentSection>
            <S.InnerContent>
              {children}
            </S.InnerContent>
          </S.ContentSection>
        </div>
        
        <div className="col-12 col-lg-6 d-none d-lg-flex">
          <S.ImageWrapper>
            <img src={imageSrc} alt={imageAlt || "Profile Background"} />
          </S.ImageWrapper>
        </div>
      </div>
    </S.FullHeightContainer>
  );
};

export default ProfileLayout;
