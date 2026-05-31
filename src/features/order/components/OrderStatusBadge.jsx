import { Badge } from "./OrderStatusBadge.styles";

const OrderStatusBadge = ({ status, size }) => {
  return <Badge status={status} size={size}>{status}</Badge>;
};

export default OrderStatusBadge;
