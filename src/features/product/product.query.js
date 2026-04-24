import { useQuery } from "@tanstack/react-query";
import ProductAPI from "./product.api";

const useGetProduct = (id) =>
  useQuery({
    queryKey: ["products", id],
    queryFn: () => ProductAPI.getProductById(id),
    enabled: !!id,
  });

const useGetProductColors = (name) =>
  useQuery({
    queryKey: ["product-colors", name],
    queryFn: () => ProductAPI.getProductColors(name),
    enabled: !!name,
  });

export default {
  useGetProduct,
  useGetProductColors,
};
