import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { toast } from "sonner";
import useAuthStore from "@store/authStore";
import wishlistHooks from "@features/wishlist/wishlist.hooks";

import Loader from "@shared/components/Loader/Loader";
import Error from "@shared/components/Error/Error";

import productQuery from "../landing.query";
import Filter from "../components/Filters/Filter";
import ProductCard from "../components/ProductCard/ProductCard";
import Pagination from "../components/Pagination/Pagination";

import {
  PRICE_CONSTRAINTS,
  SORT_CONSTRAINTS,
} from "@constants/productFilters";

const Products = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [filters, setFilters] = useState({
    minPrice: PRICE_CONSTRAINTS.MIN,
    maxPrice: PRICE_CONSTRAINTS.MAX,
    sort: SORT_CONSTRAINTS.LATEST,
    search: "",
    category: "",
    page: 1,
    limit: 8,
  });

  const {
    data: response,
    isLoading,
    refetch,
    error,
  } = productQuery.useGetProducts(filters || {});

  const products = response?.data?.products || [];
  const totalPages = response?.data?.totalPages || 1;
  const currentPage = response?.data?.page || 1;

  const { checkItem } = wishlistHooks.useWishlistData();
  const { mutate: addToWishlist } = wishlistHooks.useAddToWishlist();
  const { mutate: removeWishlistProduct } = wishlistHooks.useRemoveWishlistProduct();

  const handleToggleWishlist = (productId) => {
    if (!isAuthenticated) {
      toast.info("Please login to add to your wishlist", {
        action: { label: "Login", onClick: () => navigate("/auth/login") }
      });
      return;
    }
    if (checkItem(productId)) {
      removeWishlistProduct(productId);
    } else {
      addToWishlist(productId);
    }
  };

  let searchQueries = params.get("search") || "";

  const updateFilters = (filter) => {
    setFilters((prev) => ({
      ...prev,
      ...filter,
      page: 1,
    }));
  };

  const containerRef = useRef(null);

  const handlePageChange = (newPage) => {
    setFilters((prev) => ({ ...prev, page: newPage }));
    if (containerRef.current) {
      const top = containerRef.current.offsetTop - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      search: searchQueries,
    }));
  }, [searchQueries]);

  if (error) {
    return <Error message={error.message} onRetry={refetch} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (!products || products.length === 0) {
    return <h1 className="text-center">No products found</h1>;
  }
  return (
    <div className="container" ref={containerRef}>
      <Filter updateFilters={updateFilters} filters={filters} />
      <div className="row row-gap-5">
        {products.map((product) => {
          return (
            <ProductCard
              key={product._id}
              name={product.name}
              price={product.price}
              stock={product.stock}
              imageUrl={product.images[0]}
              id={product._id}
              className="col-6 col-md-4 col-lg-3"
              isInWishlist={checkItem(product._id)}
              onToggleWishlist={handleToggleWishlist}
            />
          );
        })}
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
};

export default Products;
