import { useCartContext } from "../../../../cart/CartContext";

import {
  OrderSummaryCardWrapper,
  SectionTitle,
  SummaryRow,
} from "./OrderSummaryCard.styles";

const OrderSummaryCard = ({}) => {
  const { calculateTotal, totalCartItems } = useCartContext();
  const SHIPPING_FEE = 100;

  const subtotal = calculateTotal();
  const totalAmount = subtotal + SHIPPING_FEE;
  return (
    <OrderSummaryCardWrapper>
      <SectionTitle style={{ fontSize: "1.2rem", borderBottom: 0 }}>
        Order Summary
      </SectionTitle>

      <SummaryRow>
        <span>Total Items</span>
        <span>{totalCartItems().toLocaleString()}</span>
      </SummaryRow>

      <SummaryRow>
        <span>Subtotal</span>
        <span>Rs {subtotal.toLocaleString()}</span>
      </SummaryRow>

      <SummaryRow>
        <span>Shipping</span>
        <span>Rs {SHIPPING_FEE.toLocaleString()}</span>
      </SummaryRow>

      <SummaryRow total>
        <span>Total Amount</span>
        <span>Rs {totalAmount.toLocaleString()}</span>
      </SummaryRow>
    </OrderSummaryCardWrapper>
  );
};

export default OrderSummaryCard;
