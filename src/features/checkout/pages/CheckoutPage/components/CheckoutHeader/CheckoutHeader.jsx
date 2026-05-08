import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import * as S from "./CheckoutHeader.styles";

const CheckoutHeader = () => {
  const navigate = useNavigate();
  return (
    <S.BackLink onClick={() => navigate(-1)}>
      <ArrowLeft size={14} /> Back
    </S.BackLink>
  );
};

export default CheckoutHeader;
