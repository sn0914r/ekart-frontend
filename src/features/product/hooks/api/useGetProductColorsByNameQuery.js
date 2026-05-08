import { useQuery } from "@tanstack/react-query";
import { getProductColorsByName } from "../../api";

export const useGetProductColorsByNameQuery = (productName) => {
  return useQuery({
    queryKey: ["products", productName],
    queryFn: () => getProductColorsByName(productName),
  });
};
