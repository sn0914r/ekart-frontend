import { useProductPage } from "../../hooks/ui/useProductPage";

import ProductPageLoader from "./components/ProductPageLoader";
import ProductNotFound from "./components/ProductNotFound";
import ProductPageHeader from "./components/ProductPageHeader";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import ProductActions from "./components/ProductActions";
import * as S from "./ProductPage.styles";

const ProductPage = () => {
  const { product, isProductPageLoading, colors } = useProductPage();

  if (isProductPageLoading) {
    return (
      <S.PageWrapper>
        <ProductPageLoader />
      </S.PageWrapper>
    );
  }

  if (!product) {
    return (
      <S.PageWrapper>
        <ProductNotFound />
      </S.PageWrapper>
    );
  }

  return (
    <S.PageWrapper>
      <div className="container">
        <ProductPageHeader />

        <div className="row g-4 gy-5">
          <div className="col-12 col-lg-7">
            <ProductGallery images={product.images || []} />
          </div>

          <div className="col-12 col-lg-5">
            <S.InfoColumn>
              <ProductInfo product={product} />
              <ProductActions product={product} colors={colors} />
            </S.InfoColumn>
          </div>
        </div>
      </div>
    </S.PageWrapper>
  );
};

export default ProductPage;
