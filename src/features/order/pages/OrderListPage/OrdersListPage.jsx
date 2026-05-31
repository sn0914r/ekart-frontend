import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import Loader from "@shared/components/Loader/Loader";

import OrderCard from "../../components/OrderCard/OrderCard";
import { useOrdersListPage } from "../../hooks/ui/OrdersListPage.hooks";

import {
  PageWrapper,
  PageTitle,
  EmptyState,
  BackLinkWrapper,
} from "./OrdersListPage.styles";

const OrdersPage = () => {
  const { orders, isLoading, error, isError } = useOrdersListPage();

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
        <BackLinkWrapper>
          <Link to="/profile">
            <ArrowLeft size={16} /> Back to Profile
          </Link>
        </BackLinkWrapper>
        <PageTitle>My Orders</PageTitle>
        <div className="row g-4">
          {orders.map((order) => (
            <div className="col-12 col-md-6 col-lg-4" key={order._id}>
              <OrderCard order={order} />
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default OrdersPage;
