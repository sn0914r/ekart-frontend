import styled from "@emotion/styled";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Container = styled.div``;

const OrderRow = styled.div`
  border-bottom: 1px solid #eeeeee;
  padding: 2.5rem 0;
  display: grid;
  align-items: center;
  gap: 3rem;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1.2fr 1fr 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 2.5rem 0;
  }
`;

const LabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const MainLabel = styled.h3`
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

const MetaLabel = styled.span`
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 500;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #000;
  opacity: 0.4;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const StatusSelect = styled.select`
  appearance: none;
  background-color: #fcfcfc;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  padding: 0.75rem 2rem 0.75rem 1rem;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    border-color: #000;
  }

  &:focus {
    border-color: #000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const OrdersTab = ({ orders, onUpdateStatus, syncing }) => {
  console.log("orders");
  // console.log();
  return (
    <Container>
      {orders.map((order) => (
        <OrderRow key={order.id}>
          <LabelGroup>
            <MainLabel>REF: {order.id?.split("-")[0].toUpperCase()}</MainLabel>
            <MetaLabel>
              CREATED AT:{" "}
              {order.createdAt?._seconds
                ? new Date(order.createdAt._seconds * 1000).toLocaleDateString()
                : "N/A"}
            </MetaLabel>
            <MetaLabel>
              UPDATED AT:{" "}
              {order.updatedAt?._seconds
                ? new Date(order.updatedAt._seconds * 1000).toLocaleDateString()
                : "N/A"}
            </MetaLabel>
          </LabelGroup>
          <LabelGroup>
            <MainLabel>₨ {order.orderSnapshot?.subtotal || "Not available"}</MainLabel>
            <MetaLabel>{order.items?.length || 0} PRODUCTS</MetaLabel>
          </LabelGroup>
          <MetaLabel>{order.paymentStatus || "PENDING"}</MetaLabel>
          <div style={{ position: "relative" }}>
            <StatusSelect
              value={order.orderStatus}
              onChange={(e) => onUpdateStatus(order.id, e.target.value)}
              disabled={syncing}
            >
              <option value="CREATED">CREATED</option>
              <option value="CONFIRMED">CONFIRMED</option>
              <option value="SHIPPED">SHIPPED</option>
              <option value="DELIVERED">DELIVERED</option>
              <option value="CANCELLED">CANCELLED</option>
            </StatusSelect>
          </div>
          {/* <IconButton as={Link} to={`/orders/${order.id}`}>
            <ArrowLeft style={{ transform: "rotate(180deg)" }} size={18} />
          </IconButton> */}
        </OrderRow>
      ))}
    </Container>
  );
};

export default OrdersTab;
