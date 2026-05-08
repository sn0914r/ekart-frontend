import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import * as S from "./ProductPageHeader.styles";

const ProductPageHeader = () => {
  const navigate = useNavigate();
  return (
    <S.BackLink onClick={() => navigate(-1)}>
      <ArrowLeft size={18} />
      Back
    </S.BackLink>
  );
};

export default ProductPageHeader;
