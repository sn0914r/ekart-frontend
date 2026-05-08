import { ArrowLeft } from "lucide-react";
import * as S from "./CartHeader.styles";

const CartHeader = () => {
  return (
    <S.HeaderContainer>
      <S.BackLink to="/">
        <ArrowLeft size={16} /> Continue Shopping
      </S.BackLink>
    </S.HeaderContainer>
  );
};

export default CartHeader;
