import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../api/useGetProductByIdQuery";
import { useGetProductColorsByNameQuery } from "../api/useGetProductColorsByNameQuery";
import { logger } from "@utils/logger";

export const useProductPage = () => {
  const { id } = useParams();
  
  const { data: serverProduct, isLoading: isProductPageLoading } = useGetProductByIdQuery(id);
  const product = serverProduct?.data || serverProduct;
  
  const productName = product?.name || "";
  const { data: serverColors } = useGetProductColorsByNameQuery(productName);
  
  const colors = serverColors?.data || serverColors || [];

  return { product, isProductPageLoading, colors };
};
