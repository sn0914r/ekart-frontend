import { useQuery } from "@tanstack/react-query";
import ProductAPI from "./product.api";
let count = 0;
const useGetProducts = (queries) => {
    console.log(count++)
  return useQuery({
    queryKey: ["products"],
    queryFn: () =>
      queries ? ProductAPI.queryProducts(queries) : ProductAPI.getAll(),
  });
};

const useGetAdminProducts = () => {
  return useQuery({
    queryKey: ["adminProducts"],
    queryFn: ProductAPI.getAllAdmin,
  });
};

export default {
  useGetProducts,
  useGetAdminProducts,
};
