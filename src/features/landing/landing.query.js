import { useQuery } from "@tanstack/react-query";
import ProductAPI from "./landing.api";

const useGetProducts = (queries) => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () =>
      queries ? ProductAPI.queryProducts(queries) : ProductAPI.getAll(),
  });
};

export default {
  useGetProducts,
};
