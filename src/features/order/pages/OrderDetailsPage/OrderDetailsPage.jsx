import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Package,
  MapPin,
  CreditCard,
  Phone,
  User,
  XCircle,
  Receipt,
  Edit2,
  AlertTriangle,
} from "lucide-react";
import { toast } from "sonner";

import Loader from "@shared/components/Loader/Loader";
import OrderStatusBadge from "../../components/OrderStatusBadge/OrderStatusBadge";
import OrderQuery from "../../order.query";
import UpdateShippingModal from "../../components/UpdateShippingModal/UpdateShippingModal";
import Modal from "@shared/components/Modal/Modal";

import {
  PageWrapper,
  BackLinkWrapper,
  ContentCard,
  HeaderCard,
  OrderTitleGroup,
  OrderTitle,
  OrderSubtitle,
  StatGrid,
  StatCard,
  StatCardLabel,
  SectionTitle,
  TitleGroup,
  EditActionButton,
  TitleIcon,
  ItemsListWrapper,
  ItemRowCard,
  ItemImage,
  ItemDetails,
  ItemName,
  ItemMeta,
  ItemPrice,
  SummaryRow,
  SummaryLabel,
  SummaryValue,
  InfoBlockRow,
  InfoIconWrapper,
  InfoTextGroup,
  InfoLabel,
  InfoValue,
  DangerButton,
} from "./OrderDetailsPage.styles";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading, error, isError } = OrderQuery.useGetOrder(id);
  const updateOrderMutation = OrderQuery.useUpdateOrder();

  const [isShippingModalOpen, setIsShippingModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  if (isLoading) {
    return (
      <PageWrapper>
        <div
          className="container d-flex justify-content-center align-items-center flex-column gap-3"
          style={{ minHeight: "40vh" }}
        >
          <Loader />
          <span className="text-muted small">
            Loading Order Configuration...
          </span>
        </div>
      </PageWrapper>
    );
  }

  if (isError) {
    return (
      <PageWrapper>
        <div className="container">
          <div className="alert alert-danger" role="alert">
            Error loading order details: {error.message}
          </div>
          <Link to="/orders" className="btn btn-outline-primary mt-3">
            Return to Orders
          </Link>
        </div>
      </PageWrapper>
    );
  }

  const order = data?.data;

  if (!order) {
    return (
      <PageWrapper>
        <div className="container text-center py-5">
          <h2 className="mb-3 text-secondary">Order Not Found</h2>
          <Link to="/orders" className="btn btn-primary px-4 py-2">
            Return to Orders
          </Link>
        </div>
      </PageWrapper>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const executeCancel = () => {
    updateOrderMutation.mutate(
      { id, orderStatus: "CANCELLED" },
      {
        onSuccess: () => {
          toast.success("Order canceled successfully");
          setIsCancelModalOpen(false);
        },
        onError: (err) => {
          toast.error(err.message || "Failed to cancel order");
          setIsCancelModalOpen(false);
        },
      },
    );
  };

  const isPending = order.shippingStatus === "PENDING";
  const taxAmount = 0; // Adjust if backend starts returning tax
  const shippingFee = 0; // Adjust if backend starts returning shipping config

  const cancelModalFooter = (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        width: "100%",
        justifyContent: "flex-end",
      }}
    >
      <button
        className="btn btn-outline-dark px-4"
        onClick={() => setIsCancelModalOpen(false)}
        disabled={updateOrderMutation.isPending}
      >
        Keep Order
      </button>
      <button
        className="btn btn-danger px-4"
        onClick={executeCancel}
        disabled={updateOrderMutation.isPending}
      >
        {updateOrderMutation.isPending ? "Canceling..." : "Confirm Cancel"}
      </button>
    </div>
  );

  return (
    <PageWrapper>
      <div className="container">
        <BackLinkWrapper>
          <Link to="/orders">
            <ArrowLeft size={16} /> Back to Orders
          </Link>
        </BackLinkWrapper>

        {/* TOP HEADER */}
        <HeaderCard>
          <OrderTitleGroup>
            <OrderTitle>Order #{order._id}</OrderTitle>
            <OrderSubtitle>
              Placed on {formatDate(order.createdAt)}
            </OrderSubtitle>
          </OrderTitleGroup>
          {isPending && (
            <div>
              <DangerButton
                style={{ width: "auto", padding: "0.5rem 1rem", marginTop: 0 }}
                onClick={() => setIsCancelModalOpen(true)}
                disabled={updateOrderMutation.isPending}
              >
                <XCircle size={16} />
                Cancel Order
              </DangerButton>
            </div>
          )}
        </HeaderCard>

        {/* EXPLICIT STATUS OVERVIEW */}
        <StatGrid>
          <StatCard>
            <StatCardLabel>
              <Package size={14} /> Order Status
            </StatCardLabel>
            <div>
              <OrderStatusBadge status={order.orderStatus} />
            </div>
          </StatCard>
          <StatCard>
            <StatCardLabel>
              <MapPin size={14} /> Shipping Status
            </StatCardLabel>
            <div>
              <OrderStatusBadge status={order.shippingStatus} />
            </div>
          </StatCard>
          <StatCard>
            <StatCardLabel>
              <CreditCard size={14} /> Payment Status
            </StatCardLabel>
            <div>
              <OrderStatusBadge status={order.paymentStatus} />
            </div>
          </StatCard>
        </StatGrid>

        <div className="row">
          {/* Main Content Column */}
          <div className="col-12 col-lg-7">
            <ContentCard>
              <SectionTitle>
                <TitleGroup>
                  <TitleIcon>
                    <Package size={24} />
                  </TitleIcon>
                  Purchased Items ({order.orderSnapshot?.length || 0})
                </TitleGroup>
              </SectionTitle>

              <ItemsListWrapper>
                {order.orderSnapshot?.map((item) => (
                  <ItemRowCard key={item.productId}>
                    <ItemImage src={item.imageUrl} alt={item.name} />
                    <ItemDetails>
                      <ItemName>{item.name}</ItemName>
                      <ItemMeta>Qty: {item.quantity}</ItemMeta>
                    </ItemDetails>
                    <ItemPrice>Rs {item.lineTotal?.toLocaleString()}</ItemPrice>
                  </ItemRowCard>
                ))}
              </ItemsListWrapper>
            </ContentCard>

            <ContentCard>
              <SectionTitle>
                <TitleGroup>
                  <TitleIcon>
                    <MapPin size={24} />
                  </TitleIcon>
                  Delivery Information
                </TitleGroup>
                {isPending && (
                  <EditActionButton
                    onClick={() => setIsShippingModalOpen(true)}
                  >
                    <Edit2 size={14} /> 
                    <span className="d-none d-sm-inline">Edit Address</span>
                  </EditActionButton>
                )}
              </SectionTitle>

              {order.shippingAddress && (
                <>
                  <InfoBlockRow>
                    <InfoIconWrapper>
                      <User size={16} />
                    </InfoIconWrapper>
                    <InfoTextGroup>
                      <InfoLabel>Recipient Name</InfoLabel>
                      <InfoValue>{order.shippingAddress.name}</InfoValue>
                    </InfoTextGroup>
                  </InfoBlockRow>

                  <InfoBlockRow>
                    <InfoIconWrapper>
                      <MapPin size={16} />
                    </InfoIconWrapper>
                    <InfoTextGroup>
                      <InfoLabel>Delivery Address</InfoLabel>
                      <InfoValue>
                        {order.shippingAddress.address}
                        <br />
                        {order.shippingAddress.city},{" "}
                        {order.shippingAddress.state}
                        <br />
                        {order.shippingAddress.country} -{" "}
                        {order.shippingAddress.pincode}
                      </InfoValue>
                    </InfoTextGroup>
                  </InfoBlockRow>

                  <InfoBlockRow>
                    <InfoIconWrapper>
                      <Phone size={16} />
                    </InfoIconWrapper>
                    <InfoTextGroup>
                      <InfoLabel>Contact Number</InfoLabel>
                      <InfoValue>{order.shippingAddress.phone}</InfoValue>
                    </InfoTextGroup>
                  </InfoBlockRow>
                </>
              )}
            </ContentCard>
          </div>

          {/* Sidebar Column */}
          <div className="col-12 col-lg-5">
            <ContentCard>
              <SectionTitle>
                <TitleGroup>
                  <TitleIcon>
                    <Receipt size={24} />
                  </TitleIcon>
                  Order Summary
                </TitleGroup>
              </SectionTitle>

              <SummaryRow>
                <SummaryLabel>Subtotal</SummaryLabel>
                <SummaryValue>
                  Rs {order.subTotal?.toLocaleString()}
                </SummaryValue>
              </SummaryRow>
              <SummaryRow>
                <SummaryLabel>Tax</SummaryLabel>
                <SummaryValue>Rs {taxAmount}</SummaryValue>
              </SummaryRow>
              <SummaryRow>
                <SummaryLabel>Shipping</SummaryLabel>
                <SummaryValue>Rs {shippingFee}</SummaryValue>
              </SummaryRow>
              <SummaryRow isTotal>
                <SummaryLabel isTotal>Total</SummaryLabel>
                <SummaryValue isTotal>
                  Rs{" "}
                  {(order.subTotal + taxAmount + shippingFee)?.toLocaleString()}
                </SummaryValue>
              </SummaryRow>
            </ContentCard>

            {order.paymentDetails && (
              <ContentCard>
                <SectionTitle>
                  <TitleGroup>
                    <TitleIcon>
                      <CreditCard size={24} />
                    </TitleIcon>
                    Payment Details
                  </TitleGroup>
                </SectionTitle>

                {order.paymentDetails.razorpayPaymentId && (
                  <InfoBlockRow>
                    <InfoTextGroup>
                      <InfoLabel>Razorpay Reference</InfoLabel>
                      <InfoValue className="font-monospace small text-muted">
                        {order.paymentDetails.razorpayPaymentId}
                      </InfoValue>
                    </InfoTextGroup>
                  </InfoBlockRow>
                )}
                {order.paymentDetails.razorpayOrderId && (
                  <InfoBlockRow>
                    <InfoTextGroup>
                      <InfoLabel>Order ID</InfoLabel>
                      <InfoValue className="font-monospace small text-muted">
                        {order.paymentDetails.razorpayOrderId}
                      </InfoValue>
                    </InfoTextGroup>
                  </InfoBlockRow>
                )}
              </ContentCard>
            )}
          </div>
        </div>
      </div>

      <UpdateShippingModal
        isOpen={isShippingModalOpen}
        onClose={() => setIsShippingModalOpen(false)}
        orderId={id}
        defaultAddress={order.shippingAddress}
      />

      <Modal
        isOpen={isCancelModalOpen}
        onClose={() =>
          !updateOrderMutation.isPending && setIsCancelModalOpen(false)
        }
        title={
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <AlertTriangle className="text-danger" size={24} />
            Cancel Order
          </div>
        }
        maxWidth="500px"
        footer={cancelModalFooter}
      >
        <p style={{ margin: 0, paddingBottom: "1rem" }}>
          Are you sure you want to cancel this order? This action cannot be
          undone.
        </p>
      </Modal>
    </PageWrapper>
  );
};

export default OrderDetailsPage;
