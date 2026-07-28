import { useNavigate } from "react-router-dom";
import OrderSummaryCard from "../OrderSummaryCard/OrderSummaryCard";
import Button from "@shared/components/Button/Button";
import * as S from "./CheckoutSidebar.styles";

const CheckoutSidebar = ({
  isProcessing,
  canPlaceOrder,
  onClickOverride,
  buttonTextOverride,
  overrideTotalItems,
  overrideSubtotal,
}) => {
  const navigate = useNavigate();

  return (
    <S.SidebarContainer>
      <OrderSummaryCard
        overrideTotalItems={overrideTotalItems}
        overrideSubtotal={overrideSubtotal}
      />
      <Button
        disabled={isProcessing || !canPlaceOrder}
        onClick={onClickOverride || (() => navigate("/checkout/payment"))}
        style={{ marginTop: "1.5rem" }}
      >
        {isProcessing
          ? "Processing..."
          : buttonTextOverride || "Select payment method"}
      </Button>
    </S.SidebarContainer>
  );
};

export default CheckoutSidebar;
