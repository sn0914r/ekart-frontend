import styled from "@emotion/styled";
import {
  Package,
  ChevronRight,
  Clock,
  CheckCircle,
  Truck,
  XCircle,
  CreditCard,
} from "lucide-react";
import { Link } from "react-router-dom";

const CardWrapper = styled.div`
  border: 1px solid #eeeeee;
  border-radius: 4px;
  padding: 2.5rem;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2.5rem;
  transition: all 0.3s ease;
  background-color: #fcfcfc;

  &:hover {
    border-color: #000000;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ReferenceNumber = styled.h3`
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.05em;
  color: #000;
`;

const BadgeGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background-color: ${(props) => props.bgColor || "#f5f5f5"};
  color: ${(props) => props.textColor || "#666"};
  white-space: nowrap;
`;

const ItemsSummary = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0.5rem 0;
`;

const ItemThumb = styled.div`
  width: 60px;
  height: 80px;
  background-color: #fff;
  border: 1px solid #eee;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .qty-badge {
    position: absolute;
    bottom: 0;
    right: 0;
    background: #000;
    color: #fff;
    font-size: 0.6rem;
    padding: 2px 4px;
    font-weight: 700;
  }
`;

const ProductPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  color: #ccc;
  font-size: 0.6rem;
  text-align: center;
  padding: 4px;
  word-break: break-all;
`;

const MetaData = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 2rem;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const MetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const MetaLabel = styled.span`
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  font-weight: 600;
`;

const MetaValue = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: #000;
  word-break: break-all;
`;

const ActionArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 2rem;
  border-left: 1px solid #eeeeee;

  @media (max-width: 768px) {
    border-left: none;
    border-top: 1px solid #eeeeee;
    padding-left: 0;
    padding-top: 2rem;
    justify-content: flex-start;
  }
`;

const DetailsBtn = styled(Link)`
  color: #000;
  text-decoration: none;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  opacity: 0.6;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    gap: 1.25rem;
  }
`;

const STATUS_CONFIG = {
  created: {
    color: "#fbbf24",
    text: "CREATED",
    icon: <Clock size={12} />,
    bg: "#fffbeb",
  },
  confirmed: {
    color: "#3b82f6",
    text: "CONFIRMED",
    icon: <Package size={12} />,
    bg: "#eff6ff",
  },
  shipped: {
    color: "#8b5cf6",
    text: "SHIPPED",
    icon: <Truck size={12} />,
    bg: "#f5f3ff",
  },
  delivered: {
    color: "#10b981",
    text: "DELIVERED",
    icon: <CheckCircle size={12} />,
    bg: "#f0fdf4",
  },
  cancelled: {
    color: "#ef4444",
    text: "CANCELLED",
    icon: <XCircle size={12} />,
    bg: "#fef2f2",
  },
};

const PAYMENT_CONFIG = {
  paid: { color: "#10b981", text: "PAID", bg: "#f0fdf4" },
  failed: { color: "#ef4444", text: "FAILED", bg: "#fef2f2" },
  pending: { color: "#6b7280", text: "PENDING", bg: "#f9fafb" },
};

const OrderCard = ({ order }) => {
  const oStatus =
    STATUS_CONFIG[order.orderStatus?.toLowerCase()] || STATUS_CONFIG.pending;
  const pStatus =
    PAYMENT_CONFIG[order.paymentStatus?.toLowerCase()] ||
    PAYMENT_CONFIG.pending;

  return (
    <CardWrapper>
      <InfoGroup>
        <TopRow>
          <ReferenceNumber>
            REF: {order.id?.split("-")[0]?.toUpperCase() || "N/A"}
          </ReferenceNumber>
          <BadgeGroup>
            <StatusBadge bgColor={oStatus.bg} textColor={oStatus.color}>
              {oStatus.icon}
              {oStatus.text}
            </StatusBadge>
            <StatusBadge bgColor={pStatus.bg} textColor={pStatus.color}>
              <CreditCard size={12} />
              {pStatus.text}
            </StatusBadge>
          </BadgeGroup>
        </TopRow>

        <MetaData>
          <MetaItem>
            <MetaLabel>Order Created On</MetaLabel>
            <MetaValue>
              {order.createdAt?._seconds
                ? new Date(order.createdAt._seconds * 1000).toLocaleDateString()
                : "N/A"}
            </MetaValue>
          </MetaItem>
          <MetaItem>
            <MetaLabel>Total Amount</MetaLabel>
            <MetaValue>
              ₨ {order.totalAmount?.toLocaleString() || "0"}
            </MetaValue>
          </MetaItem>
          <MetaItem>
            <MetaLabel>Receipt identity</MetaLabel>
            <MetaValue>{order.paymentId || "N/A"}</MetaValue>
          </MetaItem>
          <MetaItem>
            <MetaLabel>Items</MetaLabel>
            <MetaValue>{order.items?.length || 0} pieces</MetaValue>
          </MetaItem>
        </MetaData>

        {/* <ItemsSummary>
          {order.items?.slice(0, 4).map((item, idx) => (
            <ItemThumb key={idx}>
              {item.imageUrl ? (
                <img src={item.imageUrl} alt={item.name || "Product"} />
              ) : (
                <ProductPlaceholder>
                  {item.name || item.productid || "ID ARC-00"}
                </ProductPlaceholder>
              )}
              <span className="qty-badge">
                ×{item.qty || item.quantity || 1}
              </span>
            </ItemThumb>
          ))}
          {order.items?.length > 4 && (
            <div
              style={{
                alignSelf: "center",
                fontSize: "0.75rem",
                color: "var(--text-secondary)",
                fontWeight: 600,
                letterSpacing: "0.05em",
              }}
            >
              +{order.items.length - 4} MORE
            </div>
          )}
        </ItemsSummary> */}
      </InfoGroup>

      {/* <ActionArea>
        <DetailsBtn to={`/orders/${order.id}`}>
          Inspect Archive <ChevronRight size={16} />
        </DetailsBtn>
      </ActionArea> */}
    </CardWrapper>
  );
};

export default OrderCard;
