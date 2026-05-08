import React from 'react';
import { CreditCard } from "lucide-react";
import * as S from "./Common.styles";

const PaymentDetails = ({ paymentDetails }) => {
  if (!paymentDetails) return null;

  return (
    <S.ContentCard>
      <S.SectionTitle>
        <S.TitleGroup>
          <S.TitleIcon>
            <CreditCard size={24} />
          </S.TitleIcon>
          Payment Details
        </S.TitleGroup>
      </S.SectionTitle>

      {paymentDetails.razorpayPaymentId && (
        <S.InfoBlockRow>
          <S.InfoTextGroup>
            <S.InfoLabel>Razorpay Reference</S.InfoLabel>
            <S.InfoValue className="font-monospace small text-muted">
              {paymentDetails.razorpayPaymentId}
            </S.InfoValue>
          </S.InfoTextGroup>
        </S.InfoBlockRow>
      )}
      {paymentDetails.razorpayOrderId && (
        <S.InfoBlockRow>
          <S.InfoTextGroup>
            <S.InfoLabel>Order ID</S.InfoLabel>
            <S.InfoValue className="font-monospace small text-muted">
              {paymentDetails.razorpayOrderId}
            </S.InfoValue>
          </S.InfoTextGroup>
        </S.InfoBlockRow>
      )}
    </S.ContentCard>
  );
};

export default PaymentDetails;
