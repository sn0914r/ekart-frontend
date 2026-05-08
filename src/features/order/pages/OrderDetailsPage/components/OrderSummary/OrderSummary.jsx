import React from 'react';
import { Receipt } from "lucide-react";
import * as C from "../Common.styles";
import * as S from "./OrderSummary.styles";

const OrderSummary = ({ subTotal, taxAmount, shippingFee }) => {
  return (
    <C.ContentCard>
      <C.SectionTitle>
        <C.TitleGroup>
          <C.TitleIcon>
            <Receipt size={24} />
          </C.TitleIcon>
          Order Summary
        </C.TitleGroup>
      </C.SectionTitle>

      <S.SummaryRow>
        <S.SummaryLabel>Subtotal</S.SummaryLabel>
        <S.SummaryValue>
          Rs {subTotal?.toLocaleString()}
        </S.SummaryValue>
      </S.SummaryRow>
      <S.SummaryRow>
        <S.SummaryLabel>Tax</S.SummaryLabel>
        <S.SummaryValue>Rs {taxAmount}</S.SummaryValue>
      </S.SummaryRow>
      <S.SummaryRow>
        <S.SummaryLabel>Shipping</S.SummaryLabel>
        <S.SummaryValue>Rs {shippingFee}</S.SummaryValue>
      </S.SummaryRow>
      <S.SummaryRow isTotal>
        <S.SummaryLabel isTotal>Total</S.SummaryLabel>
        <S.SummaryValue isTotal>
          Rs{" "}
          {(subTotal + taxAmount + shippingFee)?.toLocaleString()}
        </S.SummaryValue>
      </S.SummaryRow>
    </C.ContentCard>
  );
};

export default OrderSummary;
