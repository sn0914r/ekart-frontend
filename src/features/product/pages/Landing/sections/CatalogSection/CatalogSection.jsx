import { useRef } from "react";
import { useGetProductsQuery } from "../../../../hooks/api/useGetProductsQuery";
import { useProductFilters } from "../../../../hooks/ui/useProductFilters";
import { useProductWishlist } from "../../../../hooks/ui/useProductWishlist";
import Loader from "@shared/components/Loader/Loader";
import CatalogHeader from "../../components/CatalogHeader/CatalogHeader";
import ProductList from "../../components/ProductList/ProductList";
import Filter from "../../components/Filters/Filter";
import Pagination from "../../components/Pagination/Pagination";
import * as S from "./CatalogSection.styles";
import ErrorMessage from "@shared/components/ErrorMessage";

const CatalogSection = () => {
  const containerRef = useRef(null);

  const { filters, updateFilters, handlePageChangeInternal } =
    useProductFilters();

  const { handleToggleWishlist, checkItem } = useProductWishlist();

  const {
    data: response,
    isLoading,
    error,
    refetch,
  } = useGetProductsQuery(filters);

  // Pagination Data
  const products = response?.data?.products || [];
  const totalPages = response?.data?.totalPages || 1;
  const currentPage = response?.data?.page || 1;

  // Pagination Action: Updates the page and scrolls to the top of the catalog
  const handlePageChange = (newPage) => {
    handlePageChangeInternal(newPage);
    if (containerRef.current) {
      const topOffset = containerRef.current.offsetTop - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <S.Catalog id="products" ref={containerRef}>
      <CatalogHeader />
      {error ? (
        <ErrorMessage
          error={error}
          heading="Products Unavailable"
          onRetry={refetch}
        >
          We couldn’t load the products. Please try again.
        </ErrorMessage>
      ) : (
        <div className="container">
          {/* Filters UI */}
          <Filter updateFilters={updateFilters} filters={filters} />

          {/* Dynamic Content: Loading, Empty State, or Product List */}
          {isLoading ? (
            <Loader />
          ) : products.length === 0 ? (
            <h1 className="text-center py-5">No products found</h1>
          ) : (
            <ProductList
              products={products}
              onToggleWishlist={handleToggleWishlist}
              checkItem={checkItem}
            />
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </S.Catalog>
  );
};

export default CatalogSection;
