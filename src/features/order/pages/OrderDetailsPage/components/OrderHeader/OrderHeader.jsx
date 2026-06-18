import { XCircle, CreditCard } from "lucide-react";
import * as S from "./OrderHeader.styles";

const OrderHeader = ({
  order,
  setIsCancelModalOpen,
  isUpdatingOrder,
  isPending,
  formatDate,
  handleRetryPayment,
  isCheckoutProcessing,
}) => {
  const canRetryPayment =
    (order.paymentStatus === "PENDING" || order.paymentStatus === "FAILED") &&
    order.orderStatus !== "CANCELLED";

  return (
    <S.HeaderCard>
      <S.OrderTitleGroup>
        <S.OrderTitle>
          Order <S.OrderIdHighlight>#{order.orderId || order._id}</S.OrderIdHighlight>
        </S.OrderTitle>
        <S.OrderSubtitle>
          Placed on {formatDate ? formatDate(order.createdAt) : order.createdAt}
        </S.OrderSubtitle>
      </S.OrderTitleGroup>
      {(isPending || canRetryPayment) && (
        <S.ActionGroup>
          {canRetryPayment && (
            <S.PrimaryButton
              style={{ width: "auto", padding: "0.5rem 1rem", marginTop: 0 }}
              onClick={handleRetryPayment}
              disabled={isCheckoutProcessing}
            >
              <CreditCard size={16} />
              {isCheckoutProcessing ? "Processing..." : "Retry Payment"}
            </S.PrimaryButton>
          )}
          {isPending && (
            <S.DangerButton
              style={{ width: "auto", padding: "0.5rem 1rem", marginTop: 0 }}
              onClick={() => setIsCancelModalOpen(true)}
              disabled={isUpdatingOrder}
            >
              <XCircle size={16} />
              Cancel Order
            </S.DangerButton>
          )}
        </S.ActionGroup>
      )}
    </S.HeaderCard>
  );
};

export default OrderHeader;
