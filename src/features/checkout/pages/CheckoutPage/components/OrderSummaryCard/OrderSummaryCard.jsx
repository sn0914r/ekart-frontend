import { useCart } from "@features/cart/hooks/ui/useCart";
import * as S from "./OrderSummaryCard.styles";

const OrderSummaryCard = ({ overrideTotalItems, overrideSubtotal }) => {
  const { calculateTotal, totalCartItemsCount } = useCart();
  const SHIPPING_FEE = 0;

  const subtotal =
    overrideSubtotal !== undefined ? overrideSubtotal : calculateTotal();
  const itemsCount =
    overrideTotalItems !== undefined
      ? overrideTotalItems
      : totalCartItemsCount();
  const totalAmount = subtotal + SHIPPING_FEE;
  return (
    <S.OrderSummaryCardWrapper>
      <S.SectionTitle style={{ fontSize: "1.2rem", borderBottom: 0 }}>
        Order Summary
      </S.SectionTitle>

      <S.SummaryRow>
        <span>Total Items</span>
        <span>{itemsCount.toLocaleString()}</span>
      </S.SummaryRow>

      <S.SummaryRow>
        <span>Subtotal</span>
        <span>Rs {subtotal.toLocaleString()}</span>
      </S.SummaryRow>

      <S.SummaryRow>
        <span>Shipping</span>
        <span
          style={{
            color: SHIPPING_FEE === 0 ? "var(--color-success)" : "inherit",
          }}
        >
          {SHIPPING_FEE === 0 ? "Free" : `Rs ${SHIPPING_FEE.toLocaleString()}`}
        </span>
      </S.SummaryRow>

      <S.SummaryRow total>
        <span>Total Amount</span>
        <span>Rs {totalAmount.toLocaleString()}</span>
      </S.SummaryRow>
    </S.OrderSummaryCardWrapper>
  );
};

export default OrderSummaryCard;
