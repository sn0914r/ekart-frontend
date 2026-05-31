import React from 'react';
import { Package, MapPin, CreditCard } from "lucide-react";
import OrderStatusBadge from "../../../../components/OrderStatusBadge";
import * as S from "./OrderStatusOverview.styles";

const OrderStatusOverview = ({ order, formatDate }) => {
  const getTimelineItem = (type, status) => {
    return order.timeline?.find(t => t.type === type && t.status === status);
  };

  const orderStep = getTimelineItem('ORDER', order.orderStatus);
  const shippingStep = getTimelineItem('SHIPPING', order.shippingStatus);
  const paymentStep = getTimelineItem('PAYMENT', order.paymentStatus);

  const formatDescription = (step) => {
    if (!step) return null;
    return `${step.label} on ${formatDate ? formatDate(step.at) : step.at}`;
  };

  return (
    <S.StatGrid>
      <S.StatCard>
        <S.StatCardLabel>
          <Package size={14} /> Order Status
        </S.StatCardLabel>
        <div>
          <OrderStatusBadge status={order.orderStatus} size="small" />
          {orderStep && <S.StatCardDescription>{formatDescription(orderStep)}</S.StatCardDescription>}
        </div>
      </S.StatCard>
      <S.StatCard>
        <S.StatCardLabel>
          <MapPin size={14} /> Shipping Status
        </S.StatCardLabel>
        <div>
          <OrderStatusBadge status={order.shippingStatus} size="small" />
          {shippingStep && <S.StatCardDescription>{shippingStep.status === 'PENDING' ? shippingStep.label : formatDescription(shippingStep)}</S.StatCardDescription>}
        </div>
      </S.StatCard>
      <S.StatCard>
        <S.StatCardLabel>
          <CreditCard size={14} /> Payment Status
        </S.StatCardLabel>
        <div>
          <OrderStatusBadge status={order.paymentStatus} size="small" />
          {paymentStep && <S.StatCardDescription>{formatDescription(paymentStep)}</S.StatCardDescription>}
        </div>
      </S.StatCard>
    </S.StatGrid>
  );
};

export default OrderStatusOverview;
