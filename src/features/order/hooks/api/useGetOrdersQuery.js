import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../api";

export const useGetOrdersQuery = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ["orders", page, limit],
    queryFn: () => getOrders(page, limit),
  });
};
