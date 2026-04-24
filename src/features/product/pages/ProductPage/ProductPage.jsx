import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ProductQuery from "../../product.query";
import ProductGallery from "../../components/ProductGallery/ProductGallery";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import ProductActions from "../../components/ProductActions/ProductActions";
import Loader from "@shared/components/Loader/Loader";
import { PageWrapper, InfoColumn, BackLink } from "./ProductPage.styles";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: productResponse, isLoading: productLoading } = ProductQuery.useGetProduct(id);
  const product = productResponse?.data;

  // Wait to fetch colors until we actually have the product's name
  const { data: colorsResponse } = ProductQuery.useGetProductColors(product?.name);
  const colors = colorsResponse?.data || [];

  if (productLoading) {
    return (
      <PageWrapper style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh", flexDirection: "column", gap: "1rem" }}>
        <Loader />
        <span className="text-muted small">Loading Product Data...</span>
      </PageWrapper>
    );
  }

  if (!product) {
    return (
      <PageWrapper>
        <div className="container text-center pt-5">
          <h3 style={{ fontFamily: "var(--font-serif)" }}>Product Not Found</h3>
          <p className="text-muted">The item you are looking for does not exist or has been removed.</p>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="container">
        <BackLink onClick={() => navigate(-1)}>
          <ArrowLeft size={18} />
          Back
        </BackLink>
        <div className="row g-4 gy-5">
          <div className="col-12 col-lg-7">
            <ProductGallery images={product.images || []} />
          </div>

          <div className="col-12 col-lg-5">
            <InfoColumn>
              <ProductInfo product={product} />
              <ProductActions product={product} colors={colors} />
            </InfoColumn>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ProductPage;
