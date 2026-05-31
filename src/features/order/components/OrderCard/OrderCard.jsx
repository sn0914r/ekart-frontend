import { ArrowRight, ShoppingBag } from "lucide-react";
import OrderStatusBadge from "../OrderStatusBadge";
import * as S from "./OrderCard.styles";

const OrderCard = ({ order }) => {
  if (!order) return null;

  const date = new Date(order.createdAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const totalItems = order.orderSnapshot.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const images = order.orderSnapshot.map((item) => item.imageUrl);
  const displayImages = images.slice(0, 3);
  const remainingImages = images.length - 3;

  return (
    <S.CardWrapper>
      <S.CardContent>
        <S.CardHeader>
          <S.OrderId>{order.orderId || `#EK-${order._id.substring(order._id.length - 6).toUpperCase()}`}</S.OrderId>
          <S.OrderDate>{date}</S.OrderDate>
        </S.CardHeader>

        <S.ImageRow>
          {displayImages.map((url, index) => (
            <S.ImageBox key={index}>
              <img src={url} alt={`Product ${index + 1}`} />
            </S.ImageBox>
          ))}
          {remainingImages > 0 && (
            <S.MoreBadge>+{remainingImages}</S.MoreBadge>
          )}
        </S.ImageRow>

        <S.Divider />

        <S.StatusRow>
          <S.StatusGroup>
            <S.StatusLabel>Status</S.StatusLabel>
            <OrderStatusBadge status={order.orderStatus} />
          </S.StatusGroup>
          <S.StatusGroup>
            <S.StatusLabel>Payment</S.StatusLabel>
            <OrderStatusBadge status={order.paymentStatus} />
          </S.StatusGroup>
        </S.StatusRow>

        <S.Divider />

        <S.TotalRow>
          <S.ItemCount>
            <ShoppingBag size={18} strokeWidth={1.5} />
            {totalItems} {totalItems === 1 ? "Item" : "Items"}
          </S.ItemCount>
          <S.TotalPriceBox>
            <S.TotalLabel>Total</S.TotalLabel>
            <S.TotalAmount>Rs {order.subTotal?.toLocaleString()}</S.TotalAmount>
          </S.TotalPriceBox>
        </S.TotalRow>
      </S.CardContent>

      <S.Divider />

      <S.FooterLink to={`/orders/${order._id}`}>
        View Order Details <ArrowRight size={16} />
      </S.FooterLink>
    </S.CardWrapper>
  );
};

export default OrderCard;
