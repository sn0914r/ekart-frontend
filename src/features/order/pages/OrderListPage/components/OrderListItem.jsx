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

  // Truncate long order IDs (MongoDB ObjectIds are 24 chars)
  const truncateOrderId = (id) => {
    if (!id) return "";
    return id.length > 8 ? `...${id.slice(-8)}` : id;
  };

  return (
    <OrderCard onClick={() => navigate(`/orders/${orderId}`)}>
      <OrderHeader>
        <OrderId>Order #{truncateOrderId(orderId)}</OrderId>
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
