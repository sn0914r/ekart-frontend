import React from 'react';
import { Package } from "lucide-react";
import * as C from "../Common.styles";
import * as S from "./OrderItems.styles";

const OrderItems = ({ orderSnapshot }) => {
  return (
    <C.ContentCard>
      <C.SectionTitle>
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
            </S.ItemDetails>
            <S.ItemPrice>Rs {item.lineTotal?.toLocaleString()}</S.ItemPrice>
          </S.ItemRowCard>
        ))}
      </S.ItemsListWrapper>
    </C.ContentCard>
  );
};

export default OrderItems;
