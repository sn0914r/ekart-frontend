import { useQuery, keepPreviousData } from "@tanstack/react-query";
import ProductAPI from "./landing.api";

const useGetProducts = (queries) => {
  return useQuery({
    queryKey: ["products", queries],
    queryFn: () => {
      return queries ? ProductAPI.queryProducts(queries) : ProductAPI.getAll();
    },
    placeholderData: keepPreviousData,
  });
};

export default {
  useGetProducts,
};
