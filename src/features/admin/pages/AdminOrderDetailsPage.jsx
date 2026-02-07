import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Error from "../../../shared/components/Error";
import OrderStatusBadge from "../../order/components/OrderStatusBadge";
import OrdersApi from "../admin.query";
import {
  PageWrapper,
  PageHeader,
  PageTitle,
  BackButton,
  DetailsGrid,
  Section,
  SectionTitle,
  InfoRow,
  InfoLabel,
  InfoValue,
  ItemsList,
  ItemCard,
  ItemImage,
  ItemDetails,
  ItemName,
  ItemInfo,
  HistoryList,
  HistoryItem,
  HistoryStatus,
  HistoryDate,
  TotalSection,
  TotalLabel,
  TotalAmount,
  UpdateStatusSection,
  UpdateStatusTitle,
  StatusButtonsContainer,
  StatusButton,
  NoActionsText,
} from "./AdminOrderDetailsPage.styles";

const AdminOrderDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialOrder = location.state;

  if (!initialOrder) {
    return <Error message="Order Not Found" />;
  }

  // Use local state to manage order data so we can update it
  const [order, setOrder] = React.useState(initialOrder);

  const {
    _id: orderId,
    createdAt,
    updatedAt,
    shippingStatus,
    orderStatus,
    paymentStatus,
    orderSnapshot,
    subTotal,
    email,
    orderStatusHistory,
    paymentDetails: { razorpayOrderId, razorpayPaymentId } = {},
    shippingAddress,
    shippingStatusHistory,
    userId,
  } = order;

  const updateShippingStatusMutation = OrdersApi.usePatchShippingStatusAdmin();

  // Shipping status transition rules
  const SHIPPING_STATUS_TRANSITIONS = {
    PENDING: ["PACKED", "CANCELLED"],
    PACKED: ["SHIPPED"],
    SHIPPED: ["DELIVERED"],
    DELIVERED: [],
    CANCELLED: [],
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleUpdateShippingStatus = (newStatus) => {
    updateShippingStatusMutation.mutate(
      {
        id: orderId,
        data: { shippingStatus: newStatus },
      },
      {
        onSuccess: () => {
          // Update local order state with new shipping status
          setOrder((prevOrder) => ({
            ...prevOrder,
            shippingStatus: newStatus,
            updatedAt: new Date().toISOString(),
            shippingStatusHistory: [
              ...(prevOrder.shippingStatusHistory || []),
              {
                status: newStatus,
                at: new Date().toISOString(),
              },
            ],
          }));
        },
      },
    );
  };

  // Get allowed status transitions for current shipping status
  const getAllowedStatusTransitions = () => {
    return SHIPPING_STATUS_TRANSITIONS[shippingStatus] || [];
  };

  return (
    <PageWrapper>
      <div className="container">
        <PageHeader>
          <PageTitle>Order Details</PageTitle>
          <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
        </PageHeader>

        {/* Update Shipping Status Section */}
        <UpdateStatusSection>
          <UpdateStatusTitle>Update Shipping Status</UpdateStatusTitle>
          <div style={{ marginBottom: "1rem" }}>
            <InfoLabel>Current Status: </InfoLabel>
            <OrderStatusBadge status={shippingStatus} />
          </div>
          {getAllowedStatusTransitions().length > 0 ? (
            <StatusButtonsContainer>
              {getAllowedStatusTransitions().map((status) => (
                <StatusButton
                  key={status}
                  onClick={() => handleUpdateShippingStatus(status)}
                  disabled={updateShippingStatusMutation.isPending}
                >
                  {updateShippingStatusMutation.isPending
                    ? "Updating..."
                    : `Mark as ${status}`}
                </StatusButton>
              ))}
            </StatusButtonsContainer>
          ) : (
            <NoActionsText>
              No further status updates available for {shippingStatus} orders.
            </NoActionsText>
          )}
        </UpdateStatusSection>

        {/* Order Information Grid */}
        <DetailsGrid>
          {/* Order Info */}
          <Section>
            <SectionTitle>Order Information</SectionTitle>
            <InfoRow>
              <InfoLabel>Order ID</InfoLabel>
              <InfoValue>{orderId}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Created</InfoLabel>
              <InfoValue>{formatDate(createdAt)}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Updated</InfoLabel>
              <InfoValue>{formatDate(updatedAt)}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Order Status</InfoLabel>
              <InfoValue>
                <OrderStatusBadge status={orderStatus} />
              </InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Shipping Status</InfoLabel>
              <InfoValue>
                <OrderStatusBadge status={shippingStatus} />
              </InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Payment Status</InfoLabel>
              <InfoValue>
                <OrderStatusBadge status={paymentStatus} />
              </InfoValue>
            </InfoRow>
          </Section>

          {/* Customer Info */}
          <Section>
            <SectionTitle>Customer Information</SectionTitle>
            <InfoRow>
              <InfoLabel>User ID</InfoLabel>
              <InfoValue>{userId || "N/A"}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Email</InfoLabel>
              <InfoValue>{email || "N/A"}</InfoValue>
            </InfoRow>
          </Section>

          {/* Payment Details */}
          <Section>
            <SectionTitle>Payment Details</SectionTitle>
            <InfoRow>
              <InfoLabel>Razorpay Order ID</InfoLabel>
              <InfoValue>{razorpayOrderId || "N/A"}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Razorpay Payment ID</InfoLabel>
              <InfoValue>{razorpayPaymentId || "N/A"}</InfoValue>
            </InfoRow>
          </Section>
        </DetailsGrid>

        {/* Shipping Address */}
        <Section style={{ marginBottom: "2rem" }}>
          <SectionTitle>Shipping Address</SectionTitle>
          {shippingAddress ? (
            <>
              <InfoRow>
                <InfoLabel>Name</InfoLabel>
                <InfoValue>{shippingAddress.name || "N/A"}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Address</InfoLabel>
                <InfoValue>{shippingAddress.address || "N/A"}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>City</InfoLabel>
                <InfoValue>{shippingAddress.city || "N/A"}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>State</InfoLabel>
                <InfoValue>{shippingAddress.state || "N/A"}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Pincode</InfoLabel>
                <InfoValue>{shippingAddress.pincode || "N/A"}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Phone</InfoLabel>
                <InfoValue>{shippingAddress.phone || "N/A"}</InfoValue>
              </InfoRow>
            </>
          ) : (
            <InfoRow>
              <InfoLabel>Address</InfoLabel>
              <InfoValue>N/A</InfoValue>
            </InfoRow>
          )}
        </Section>

        {/* Order Items */}
        <Section style={{ marginBottom: "2rem" }}>
          <SectionTitle>
            Order Items ({orderSnapshot?.length || 0})
          </SectionTitle>
          <ItemsList>
            {orderSnapshot?.map((item, index) => (
              <ItemCard key={index}>
                <ItemImage
                  src={item.imageUrl || "/placeholder.png"}
                  alt={item.name}
                />
                <ItemDetails>
                  <ItemName>{item.name}</ItemName>
                  <ItemInfo>
                    Price: ₹{item.unitPrice?.toLocaleString()}
                  </ItemInfo>
                  <ItemInfo>Quantity: {item.quantity}</ItemInfo>
                  <ItemInfo>
                    Total: ₹{item.lineTotal?.toLocaleString()}
                  </ItemInfo>
                </ItemDetails>
              </ItemCard>
            ))}
          </ItemsList>
        </Section>

        {/* Status Histories */}
        <DetailsGrid>
          {/* Order Status History */}
          {orderStatusHistory && orderStatusHistory.length > 0 && (
            <Section>
              <SectionTitle>Order Status History</SectionTitle>
              <HistoryList>
                {orderStatusHistory.map((history, index) => (
                  <HistoryItem key={index}>
                    <HistoryStatus>{history.status}</HistoryStatus>
                    <HistoryDate>{formatDate(history.at)}</HistoryDate>
                  </HistoryItem>
                ))}
              </HistoryList>
            </Section>
          )}

          {/* Shipping Status History */}
          {shippingStatusHistory && shippingStatusHistory.length > 0 && (
            <Section>
              <SectionTitle>Shipping Status History</SectionTitle>
              <HistoryList>
                {shippingStatusHistory.map((history, index) => (
                  <HistoryItem key={index}>
                    <HistoryStatus>{history.status}</HistoryStatus>
                    <HistoryDate>{formatDate(history.at)}</HistoryDate>
                  </HistoryItem>
                ))}
              </HistoryList>
            </Section>
          )}
        </DetailsGrid>

        {/* Total */}
        <TotalSection>
          <TotalLabel>Order Total</TotalLabel>
          <TotalAmount>₹{subTotal?.toLocaleString()}</TotalAmount>
        </TotalSection>
      </div>
    </PageWrapper>
  );
};

export default AdminOrderDetails;
