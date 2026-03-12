import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import OrderListItem from "../components/OrderListItem";
import OrdersQuery from "../order.query";
import Loader from "../../../shared/components/Loader";
import { PageWrapper, PageTitle, EmptyState } from "./OrdersListPage.styles";

const OrdersPage = () => {
  const { data, isLoading, error, isError } = OrdersQuery.useGetOrders();
  const orders = data?.data;

  if (isLoading) {
    return (
      <PageWrapper>
        <div className="container">
          <Loader />
        </div>
      </PageWrapper>
    );
  }

  if (isError) {
    return (
      <PageWrapper>
        <div className="container">
          <div className="alert alert-danger" role="alert">
            Error loading orders: {error.message}
          </div>
        </div>
      </PageWrapper>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <PageWrapper>
        <div className="container">
          <EmptyState>
            <h2>No Orders Yet</h2>
            <p>You haven't placed any orders yet.</p>
            <Link to="/">Start Shopping</Link>
          </EmptyState>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="container">
        <div className="d-flex align-items-center mb-4">
          <Link
            to="/profile"
            className="text-decoration-none text-muted d-flex align-items-center gap-2 small text-uppercase"
          >
            <ArrowLeft size={16} /> Back to Profile
          </Link>
        </div>
        <PageTitle>My Orders</PageTitle>
        <div className="row g-4">
          {orders.map((order) => (
            <div className="col-12 col-md-6 col-lg-4" key={order._id}>
              <OrderListItem
                orderId={order._id}
                createdAt={order.createdAt}
                orderStatus={order.orderStatus}
                paymentStatus={order.paymentStatus}
                subTotal={order.subTotal}
              />
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default OrdersPage;
