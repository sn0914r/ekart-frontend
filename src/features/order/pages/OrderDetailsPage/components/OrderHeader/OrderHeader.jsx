import { XCircle } from "lucide-react";
import * as S from "./OrderHeader.styles";

const OrderHeader = ({
  order,
  setIsCancelModalOpen,
  isUpdatingOrder,
  isPending,
  formatDate,
}) => {
  return (
    <S.HeaderCard>
      <S.OrderTitleGroup>
        <S.OrderTitle>Order #{order._id}</S.OrderTitle>
        <S.OrderSubtitle>
          Placed on {formatDate ? formatDate(order.createdAt) : order.createdAt}
        </S.OrderSubtitle>
      </S.OrderTitleGroup>
      {isPending && (
        <div>
          <S.DangerButton
            style={{ width: "auto", padding: "0.5rem 1rem", marginTop: 0 }}
            onClick={() => setIsCancelModalOpen(true)}
            disabled={isUpdatingOrder}
          >
            <XCircle size={16} />
            Cancel Order
          </S.DangerButton>
        </div>
      )}
    </S.HeaderCard>
  );
};

export default OrderHeader;
