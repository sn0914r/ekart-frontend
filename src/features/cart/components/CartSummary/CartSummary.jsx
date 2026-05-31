import { ArrowRight } from "lucide-react";
import * as S from "./CartSummary.styles";

const CartSummary = ({ subtotal, shipping, isProcessing, handleCheckout }) => {
  const total = subtotal + shipping;
  return (
    <S.Summary>
      <S.SummaryTitle>Order Summary</S.SummaryTitle>
      <S.SummaryRow>
        <span>Subtotal</span>
        <span>Rs {subtotal.toLocaleString()}</span>
      </S.SummaryRow>
      <S.SummaryRow>
        <span>Shipping</span>
        <span>{shipping === 0 ? "Free" : `Rs ${shipping.toLocaleString()}`}</span>
      </S.SummaryRow>
      <S.SummaryRow total totalValue={total}>
        <span>Total</span>
        <span>Rs {total.toLocaleString()}</span>
      </S.SummaryRow>
      <S.CheckoutBtn onClick={handleCheckout} disabled={isProcessing}>
        {isProcessing ? "Processing..." : "Checkout"} <ArrowRight size={16} />
      </S.CheckoutBtn>
    </S.Summary>
  );
};

export default CartSummary;
