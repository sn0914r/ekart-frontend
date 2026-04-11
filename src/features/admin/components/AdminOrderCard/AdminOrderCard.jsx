import OrderStatusBadge from "@features/order/components/OrderStatusBadge/OrderStatusBadge";

import {
  OrderCard,
  OrderHeader,
  OrderId,
  DateSection,
  DateLabel,
  DateValue,
  OrderBody,
  InfoItem,
  InfoLabel,
  InfoValue,
  StatusSection,
  OrderFooter,
  TotalSection,
  TotalLabel,
  TotalAmount,
  ViewButton,
} from "./AdminOrderCard.styles";

export default function AdminOrderCard({ order, onView }) {
  const {
    _id,
    createdAt,
    updatedAt,
    shippingStatus,
    orderStatus,
    paymentStatus,
    orderSnapshot,
    subTotal,
  } = order;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const truncateOrderId = (id) => {
    if (!id) return "";
    return id.length > 12 ? `...${id.slice(-12)}` : id;
  };

  const itemCount = orderSnapshot?.length || 0;

  return (
    <OrderCard>
      <OrderHeader>
        <OrderId>Order #{truncateOrderId(_id)}</OrderId>
        <div className="d-flex gap-3 flex-wrap">
          <DateSection>
            <DateLabel>Created</DateLabel>
            <DateValue>{formatDate(createdAt)}</DateValue>
          </DateSection>
          <DateSection>
            <DateLabel>Updated</DateLabel>
            <DateValue>{formatDate(updatedAt)}</DateValue>
          </DateSection>
        </div>
      </OrderHeader>

      <OrderBody>
        <InfoItem>
          <InfoLabel>Items</InfoLabel>
          <InfoValue>
            {itemCount} {itemCount === 1 ? "Item" : "Items"}
          </InfoValue>
        </InfoItem>

        <InfoItem>
          <InfoLabel>Order Status</InfoLabel>
          <OrderStatusBadge status={orderStatus} />
        </InfoItem>

        <InfoItem>
          <InfoLabel>Shipping Status</InfoLabel>
          <OrderStatusBadge status={shippingStatus} />
        </InfoItem>

        <InfoItem>
          <InfoLabel>Payment Status</InfoLabel>
          <OrderStatusBadge status={paymentStatus} />
        </InfoItem>
      </OrderBody>

      <OrderFooter>
        <TotalSection>
          <TotalLabel>Total</TotalLabel>
          <TotalAmount>₹{subTotal?.toLocaleString()}</TotalAmount>
        </TotalSection>
        <ViewButton onClick={() => onView(order)}>View Order</ViewButton>
      </OrderFooter>
    </OrderCard>
  );
}
