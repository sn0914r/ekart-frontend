import OrderSummaryCard from "../OrderSummaryCard/OrderSummaryCard";
import Button from "@shared/components/Button/Button";
import * as S from "./CheckoutSidebar.styles";

const CheckoutSidebar = ({ isProcessing, canPlaceOrder, onPlaceOrder }) => {
  return (
    <S.SidebarContainer>
      <OrderSummaryCard />
      <Button
        disabled={isProcessing || !canPlaceOrder}
        onClick={onPlaceOrder}
        style={{ marginTop: "1.5rem" }}
      >
        {isProcessing ? "Processing..." : "Place Order"}
      </Button>
    </S.SidebarContainer>
  );
};

export default CheckoutSidebar;
