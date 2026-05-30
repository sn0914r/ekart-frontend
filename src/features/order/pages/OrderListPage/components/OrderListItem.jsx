import { useNavigate } from "react-router-dom";
import OrderStatusBadge from "../../../components/OrderStatusBadge";

import {
  OrderCard,
  OrderHeader,
  OrderId,
  OrderDate,
  OrderBody,
  StatusRow,
  StatusLabel,
  OrderFooter,
  TotalLabel,
  TotalAmount,
} from "./OrderListItem.styles";

const OrderListItem = ({
  orderSearchId,
  createdAt,
  orderStatus,
  paymentStatus,
  subTotal,
  orderId,
}) => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <OrderCard onClick={() => navigate(`/orders/${orderSearchId}`)}>
      <OrderHeader>
        <OrderId>Order #{orderId}</OrderId>
        <OrderDate>{formatDate(createdAt)}</OrderDate>
      </OrderHeader>

      <OrderBody>
        <StatusRow>
          <StatusLabel>Order Status</StatusLabel>
          <OrderStatusBadge status={orderStatus} />
        </StatusRow>
        <StatusRow>
          <StatusLabel>Payment</StatusLabel>
          <OrderStatusBadge status={paymentStatus} />
        </StatusRow>
      </OrderBody>

      <OrderFooter>
        <TotalLabel>Total</TotalLabel>
        <TotalAmount>Rs {subTotal?.toLocaleString()}</TotalAmount>
      </OrderFooter>
    </OrderCard>
  );
};

export default OrderListItem;
