import React from 'react';
import { Package } from "lucide-react";
import * as C from "../Common.styles";
import * as S from "./OrderItems.styles";

const OrderItems = ({ orderSnapshot }) => {
  return (
    <C.ContentCard style={{ padding: "1.25rem 1.5rem" }}>
      <C.SectionTitle style={{ marginBottom: "1rem", paddingBottom: "0.75rem", fontSize: "1.25rem" }}>
        <C.TitleGroup>
          <C.TitleIcon>
            <Package size={24} />
          </C.TitleIcon>
          Purchased Items ({orderSnapshot?.length || 0})
        </C.TitleGroup>
      </C.SectionTitle>

      <S.ItemsListWrapper>
        {orderSnapshot?.map((item) => (
          <S.ItemRowCard key={item.productId}>
            <S.ItemImage src={item.imageUrl} alt={item.name} />
            <S.ItemDetails>
              <S.ItemName>{item.name}</S.ItemName>
              <S.ItemMeta>Qty: {item.quantity}</S.ItemMeta>
              <S.ItemPrice>Rs {item.lineTotal?.toLocaleString()}</S.ItemPrice>
            </S.ItemDetails>
          </S.ItemRowCard>
        ))}
      </S.ItemsListWrapper>
    </C.ContentCard>
  );
};

export default OrderItems;
