import { useState } from "react";
import { useGetOrdersQuery } from "../api/useGetOrdersQuery";
import { ORDERS_PAGE_LIMIT } from "@constants/config";

export const useOrdersListPage = () => {
  const [page, setPage] = useState(1);
  const limit = ORDERS_PAGE_LIMIT;
  const { data, isLoading, error, isError } = useGetOrdersQuery(page, limit);
  
  const orders = data?.data?.orders || [];
  const pagination = data?.data?.pagination || null;

  return {
    orders,
    pagination,
    page,
    setPage,
    limit,
    isLoading,
    error,
    isError,
  };
};
