import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import Loader from "@shared/components/Loader/Loader";
import { useOrderDetailsPage } from "../../hooks/ui/OrderDetailsPage.hooks";

// Sub-components
import OrderHeader from "./components/OrderHeader/OrderHeader";
import OrderStatusOverview from "./components/OrderStatusOverview/OrderStatusOverview";
import OrderItems from "./components/OrderItems/OrderItems";
import DeliveryInfo from "./components/DeliveryInfo/DeliveryInfo";
import OrderSummary from "./components/OrderSummary/OrderSummary";
import PaymentDetails from "./components/PaymentDetails";
import CancelOrderModal from "./components/CancelOrderModal";
import OrderTimeline from "./components/OrderTimeline/OrderTimeline";

import * as S from "./OrderDetailsPage.styles";
import NotFound from "../../../../app/pages/NotFound/NotFoundPage";

const OrderDetailsPage = () => {
  const {
    id,
    order,
    isLoading,
    error,
    isError,
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
        </div>
      </S.PageWrapper>
    );
  }

  if (isError || !order) {
    return (
      <NotFound
        errorCode="404"
        title="Order Not Found."
        message="This order does not exist or may have been removed."
        buttonLink="/orders"
        buttonText="Back to Orders"
      />
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

        <OrderStatusOverview order={order} formatDate={formatDate} />

        <div className="row">
          <div className="col-12 col-lg-6">
            <OrderItems orderSnapshot={order.orderSnapshot} />
            <DeliveryInfo shippingAddress={order.shippingAddress} />
          </div>

          <div className="col-12 col-lg-6">
            <OrderTimeline timeline={order.timeline} formatDate={formatDate} />
            <OrderSummary
              subTotal={order.subTotal}
              taxAmount={taxAmount}
              shippingFee={shippingFee}
            />
            <PaymentDetails paymentDetails={order.paymentDetails} />
          </div>
        </div>
      </div>

      <CancelOrderModal
        isOpen={isCancelModalOpen}
        onClose={() => setIsCancelModalOpen(false)}
        isUpdatingOrder={isUpdatingOrder}
        executeCancel={executeCancel}
        order={order}
        itemCount={order.orderSnapshot?.length || 0}
        totalAmount={(order.subTotal || 0) + taxAmount + shippingFee}
      />
    </S.PageWrapper>
  );
};

export default OrderDetailsPage;
