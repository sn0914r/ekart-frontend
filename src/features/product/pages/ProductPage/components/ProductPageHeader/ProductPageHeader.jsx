import { ArrowLeft, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import * as S from "./ProductPageHeader.styles";

const ProductPageHeader = () => {
  const navigate = useNavigate();
  return (
    <S.HeaderContainer>
      <S.BackLink onClick={() => navigate(-1)}>
        <ArrowLeft size={16} />
        Continue Shopping
      </S.BackLink>
      <S.CartLink onClick={() => navigate("/cart")}>
        <ShoppingBag size={16} />
        Cart
      </S.CartLink>
    </S.HeaderContainer>
  );
};

export default ProductPageHeader;
