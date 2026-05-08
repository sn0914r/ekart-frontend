import * as S from "./CartLoading.styles";

const CartLoading = () => {
  return (
    <div className="container">
      <S.LoadingContainer>
        <p>Loading your bag...</p>
      </S.LoadingContainer>
    </div>
  );
};

export default CartLoading;
