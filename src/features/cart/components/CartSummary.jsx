import {
  Summary,
  SummaryTitle,
  SummaryRow,
  CheckoutBtn,
} from "./CartSummary.styles";

import { ArrowRight } from "lucide-react";

const CartSummary = ({ subtotal, shipping, isProcessing, handleCheckout }) => {
  const total = subtotal + shipping;
  return (
    <Summary>
      <SummaryTitle>Order Summary</SummaryTitle>
      <SummaryRow>
        <span>Subtotal</span>
        <span>Rs {subtotal.toLocaleString()}</span>
      </SummaryRow>
      <SummaryRow>
        <span>Shipping</span>
        <span>Rs {shipping.toLocaleString()}</span>
      </SummaryRow>
      <SummaryRow bold total totalValue={total}>
        <span>Total</span>
        <span>Rs {total.toLocaleString()}</span>
      </SummaryRow>
      <CheckoutBtn onClick={handleCheckout} disabled={isProcessing}>
        {isProcessing ? "Processing..." : "Checkout"} <ArrowRight size={16} />
      </CheckoutBtn>
    </Summary>
  );
};

export default CartSummary;
