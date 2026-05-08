import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../api";

export const useGetOrdersQuery = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });
};
