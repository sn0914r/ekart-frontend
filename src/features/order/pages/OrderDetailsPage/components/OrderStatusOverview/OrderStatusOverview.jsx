import React from 'react';
import { Package, MapPin, CreditCard } from "lucide-react";
import OrderStatusBadge from "../../../../components/OrderStatusBadge";
import * as S from "./OrderStatusOverview.styles";

const OrderStatusOverview = ({ order }) => {
  return (
    <S.StatGrid>
      <S.StatCard>
        <S.StatCardLabel>
          <Package size={14} /> Order Status
        </S.StatCardLabel>
        <div>
          <OrderStatusBadge status={order.orderStatus} />
        </div>
      </S.StatCard>
      <S.StatCard>
        <S.StatCardLabel>
          <MapPin size={14} /> Shipping Status
        </S.StatCardLabel>
        <div>
          <OrderStatusBadge status={order.shippingStatus} />
        </div>
      </S.StatCard>
      <S.StatCard>
        <S.StatCardLabel>
          <CreditCard size={14} /> Payment Status
        </S.StatCardLabel>
        <div>
          <OrderStatusBadge status={order.paymentStatus} />
        </div>
      </S.StatCard>
    </S.StatGrid>
  );
};

export default OrderStatusOverview;
