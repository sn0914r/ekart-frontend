import { useQuery, useMutation } from "@tanstack/react-query";
import CartAPIs from "./cart.api";

const useUpdateCart = () => {
  return useMutation({
    mutationFn: ({ items }) => {
      return CartAPIs.addToCart(items);
    },
  });
};

const useGetCart = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: () => CartAPIs.getCart(),
  });
};

export default { useUpdateCart, useGetCart };
