import * as S from "./ProductNotFound.styles";

const ProductNotFound = () => (
  <S.NotFoundContainer className="container">
    <h3>Product Not Found</h3>
    <p>The item you are looking for does not exist or has been removed.</p>
  </S.NotFoundContainer>
);

export default ProductNotFound;
