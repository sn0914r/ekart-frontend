import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import Loader from "@shared/components/Loader/Loader";
import UpdateShippingModal from "./components/UpdateShippingModal/UpdateShippingModal";
import { useOrderDetailsPage } from "./OrderDetailsPage.hooks";

// Sub-components
import OrderHeader from "./components/OrderHeader/OrderHeader";
import OrderStatusOverview from "./components/OrderStatusOverview/OrderStatusOverview";
import OrderItems from "./components/OrderItems/OrderItems";
import DeliveryInfo from "./components/DeliveryInfo/DeliveryInfo";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import PaymentDetails from "./components/PaymentDetails";
import CancelOrderModal from "./components/CancelOrderModal";

import * as S from "./OrderDetailsPage.styles";

const OrderDetailsPage = () => {
  const {
    id,
    order,
    isLoading,
    error,
    isError,
    isShippingModalOpen,
    setIsShippingModalOpen,
    isCancelModalOpen,
    setIsCancelModalOpen,
    formatDate,
    executeCancel,
    isPending,
    taxAmount,
    shippingFee,
    isUpdatingOrder,
  } = useOrderDetailsPage();

  if (isLoading) {
    return (
      <S.PageWrapper>
        <div
          className="container d-flex justify-content-center align-items-center flex-column gap-3"
          style={{ minHeight: "40vh" }}
        >
          <Loader />
          <span className="text-muted small">Loading ...</span>
        </div>
      </S.PageWrapper>
    );
  }

  if (isError) {
    return (
      <S.PageWrapper>
        <div className="container">
          <div className="alert alert-danger" role="alert">
            Error loading order details: {error.message}
          </div>
          <Link to="/orders" className="btn btn-outline-primary mt-3">
            Return to Orders
          </Link>
        </div>
      </S.PageWrapper>
    );
  }

  if (!order) {
    return (
      <S.PageWrapper>
        <div className="container text-center py-5">
          <h2 className="mb-3 text-secondary">Order Not Found</h2>
          <Link to="/orders" className="btn btn-primary px-4 py-2">
            Return to Orders
          </Link>
        </div>
      </S.PageWrapper>
    );
  }

  return (
    <S.PageWrapper>
      <div className="container">
        <S.BackLinkWrapper>
          <Link to="/orders">
            <ArrowLeft size={16} /> Back to Orders
          </Link>
        </S.BackLinkWrapper>

        <OrderHeader
          order={order}
          formatDate={formatDate}
          isPending={isPending}
          setIsCancelModalOpen={setIsCancelModalOpen}
          isUpdatingOrder={isUpdatingOrder}
        />

        <OrderStatusOverview order={order} />

        <div className="row">
          <div className="col-12 col-lg-7">
            <OrderItems orderSnapshot={order.orderSnapshot} />
            <DeliveryInfo
              shippingAddress={order.shippingAddress}
              isPending={isPending}
              setIsShippingModalOpen={setIsShippingModalOpen}
            />
          </div>

          <div className="col-12 col-lg-5">
            <OrderSummary
              subTotal={order.subTotal}
              taxAmount={taxAmount}
              shippingFee={shippingFee}
            />
            <PaymentDetails paymentDetails={order.paymentDetails} />
          </div>
        </div>
      </div>

      <UpdateShippingModal
        isOpen={isShippingModalOpen}
        onClose={() => setIsShippingModalOpen(false)}
        orderId={id}
        defaultAddress={order.shippingAddress}
      />

      <CancelOrderModal
        isOpen={isCancelModalOpen}
        onClose={() => setIsCancelModalOpen(false)}
        isUpdatingOrder={isUpdatingOrder}
        executeCancel={executeCancel}
      />
    </S.PageWrapper>
  );
};

export default OrderDetailsPage;
