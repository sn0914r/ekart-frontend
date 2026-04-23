import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Loader from "@shared/components/Loader/Loader";
import Error from "@shared/components/Error/Error";

import productQuery from "../landing.query";
import Filter from "../components/Filters/Filter";
import ProductCard from "../components/ProductCard/ProductCard";

import {
  PRICE_CONSTRAINTS,
  SORT_CONSTRAINTS,
} from "@constants/productFilters";

const Products = () => {
  const [params] = useSearchParams();
  const [filters, setFilters] = useState({
    minPrice: PRICE_CONSTRAINTS.MIN,
    maxPrice: PRICE_CONSTRAINTS.MAX,
    sort: SORT_CONSTRAINTS.LATEST,
    search: "",
  });

  const {
    data: response,
    isLoading,
    refetch,
    error,
  } = productQuery.useGetProducts(filters || {});

  const products = response?.data ? response.data : null;

  let searchQueries = params.get("search") || "";

  const updateFilters = (filter) => {
    setFilters((prev) => ({
      ...prev,
      ...filter,
    }));
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

  if (!products) {
    return <h1 className="text-center">No products found</h1>;
  }
  return (
    <div className="container">
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
