import * as S from "./InitialLoadingPage.styles";

const InitialLoadingPage = ({ status }) => {
  return (
    <S.LoadingContainer>
      <S.BrandShimmerContainer>
        <S.ShimmerText>EKART</S.ShimmerText>
        <S.SubText>{status || "LOADING YOUR COLLECTION..."}</S.SubText>
      </S.BrandShimmerContainer>
    </S.LoadingContainer>
  );
};

export default InitialLoadingPage;
