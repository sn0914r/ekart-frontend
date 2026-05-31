import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import * as S from "./ShippingAddressHeader.styles";

const ShippingAddressHeader = () => {
  const navigate = useNavigate();
  return (
    <S.HeaderContainer>
      <S.BackLink onClick={() => navigate(-1)}>
        <ArrowLeft size={16} /> Back
      </S.BackLink>
      <S.FormTitle>Add Shipping Address</S.FormTitle>
    </S.HeaderContainer>
  );
};

export default ShippingAddressHeader;
