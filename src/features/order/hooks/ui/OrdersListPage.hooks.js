import { useGetOrdersQuery } from "../api/useGetOrdersQuery";

export const useOrdersListPage = () => {
  const { data, isLoading, error, isError } = useGetOrdersQuery();
  const orders = data?.data;

  return {
    orders,
    isLoading,
    error,
    isError,
  };
};
