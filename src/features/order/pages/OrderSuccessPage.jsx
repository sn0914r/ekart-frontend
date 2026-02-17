import { useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Button from "../../../shared/components/Button";
import {
  SuccessWrapper,
  SuccessCard,
  IconWrapper,
  AnimatedIcon,
  SuccessTitle,
  SuccessMessage,
  OrderDetails,
  DetailRow,
  DetailLabel,
  DetailValue,
  ActionButtons,
} from "./OrderSuccessPage.styles";

const OrderSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderDetails = location.state?.orderDetails;

  useEffect(() => {
    if (!orderDetails) {
      navigate("/cart", { replace: true });
    }
  }, [orderDetails, navigate]);

  // Don't render anything if redirecting
  if (!orderDetails) {
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

              <OrderDetails>
                <DetailRow>
                  <DetailLabel>Order ID</DetailLabel>
                  <DetailValue>{orderDetails.orderId || "N/A"}</DetailValue>
                </DetailRow>
                <DetailRow>
                  <DetailLabel>Payment ID</DetailLabel>
                  <DetailValue>{orderDetails.razorpayPaymentId || "N/A"}</DetailValue>
                </DetailRow>
              </OrderDetails>

              <ActionButtons>
                <Link to="/orders" style={{ textDecoration: "none" }}>
                  <Button style={{ width: "100%" }}>View Orders</Button>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button
                    style={{
                      width: "100%",
                      background: "#f5f5f5",
                      color: "#000",
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
