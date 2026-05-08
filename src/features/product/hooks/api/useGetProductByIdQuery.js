import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../api";
import { logger } from "@utils/logger";

export const useGetProductByIdQuery = (id) => {

  return useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
  });
};
