import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../../api";

export const useAddToCartMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (d) => addToCart(d),
    onSuccess: (responseBody) => qc.setQueryData(["cart"], responseBody),
  });
};
