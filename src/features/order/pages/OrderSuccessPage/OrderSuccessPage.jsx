import { Link } from "react-router-dom";

import Button from "@shared/components/Button/Button";
import { useOrderSuccessPage } from "../../hooks/ui/OrderSuccessPage.hooks";

import {
  SuccessWrapper,
  SuccessCard,
  IconWrapper,
  AnimatedIcon,
  SuccessTitle,
  SuccessMessage,
  EmailConfirmation,
  OrderDetails,
  DetailRow,
  DetailLabel,
  DetailValue,
  ActionButtons,
} from "./OrderSuccessPage.styles";

const OrderSuccessPage = () => {
  const {
    orderId = null,
    razorpayPaymentId = null,
    totalAmount = null,
    email = null,
  } = useOrderSuccessPage();

  if (!orderId || !razorpayPaymentId) {
    return null;
  }

  return (
    <SuccessWrapper>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <SuccessCard>
              <IconWrapper>
                <AnimatedIcon
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </AnimatedIcon>
              </IconWrapper>

              <SuccessTitle>Order Placed Successfully!</SuccessTitle>
              <SuccessMessage>
                Thank you for your purchase. Your order has been confirmed and
                will be processed shortly.
              </SuccessMessage>
              {email && (
                <EmailConfirmation>
                  A confirmation email has been sent to
                  <strong>{email}</strong>
                </EmailConfirmation>
              )}

              <OrderDetails>
                <DetailRow>
                  <DetailLabel>Order ID</DetailLabel>
                  <DetailValue>{orderId}</DetailValue>
                </DetailRow>
                <DetailRow>
                  <DetailLabel>Payment ID</DetailLabel>
                  <DetailValue>{razorpayPaymentId}</DetailValue>
                </DetailRow>
                <DetailRow>
                  <DetailLabel>Total Amount</DetailLabel>
                  <DetailValue>Rs {totalAmount?.toLocaleString()}</DetailValue>
                </DetailRow>
              </OrderDetails>

              <ActionButtons>
                <Link to="/orders">
                  <Button>View Orders</Button>
                </Link>
                <Link to="/">
                  <Button
                    style={{
                      background: "var(--color-subtle-bg)",
                      color: "var(--color-black)",
                    }}
                  >
                    Continue Shopping
                  </Button>
                </Link>
              </ActionButtons>
            </SuccessCard>
          </div>
        </div>
      </div>
    </SuccessWrapper>
  );
};

export default OrderSuccessPage;
