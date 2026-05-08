import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../../api";

export const useGetOrderQuery = (id) => {
  return useQuery({
    queryKey: ["orders", id],
    queryFn: () => getOrder(id),
    enabled: !!id,
  });
};