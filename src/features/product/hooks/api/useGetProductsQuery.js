import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api";

export const useGetProductsQuery = (queries = {}) => {
  return useQuery({
    queryKey: ["products", queries],
    queryFn: () => getProducts(queries),
  });
};