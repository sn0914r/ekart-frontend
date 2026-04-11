import { Badge } from "./OrderStatusBadge.styles";

const OrderStatusBadge = ({ status }) => {
  return <Badge status={status}>{status}</Badge>;
};

export default OrderStatusBadge;
