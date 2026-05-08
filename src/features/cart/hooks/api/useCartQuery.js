import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../api";

export const useCartQuery = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });
};
