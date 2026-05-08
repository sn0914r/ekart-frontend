import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PRICE, SORT, PAGE } from "@constants/filters";
import { logger } from "@utils/logger";

export const useProductFilters = () => {
  const [params] = useSearchParams();
  const [filters, setFilters] = useState({
    minPrice: PRICE.MIN,
    maxPrice: PRICE.MAX,
    sort: SORT.LATEST,
    search: "",
    category: "",
    page: 1,
    limit: PAGE.LIMIT,
  });

  let searchQueries = params.get("search") || "";

  const updateFilters = (filter) => {
    setFilters((prev) => ({
      ...prev,
      ...filter,
      page: 1,
    }));
  };

  const handlePageChangeInternal = (newPage) => {
    setFilters((prev) => ({ ...prev, page: newPage }));
  };

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      search: searchQueries,
    }));
  }, [searchQueries]);

  return {
    filters,
    updateFilters,
    setFilters,
    handlePageChangeInternal,
  };
};
