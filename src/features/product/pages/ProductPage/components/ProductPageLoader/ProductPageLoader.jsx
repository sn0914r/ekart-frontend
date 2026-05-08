import Loader from "@shared/components/Loader/Loader";
import * as S from "./ProductPageLoader.styles";

const ProductPageLoader = () => (
  <S.LoaderWrapper>
    <Loader />
    <span className="text-muted small">Loading Product Data...</span>
  </S.LoaderWrapper>
);

export default ProductPageLoader;
