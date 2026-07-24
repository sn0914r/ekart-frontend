import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import Loader from "@shared/components/Loader/Loader";
import Pagination from "@shared/components/Pagination/Pagination";

import OrderCard from "../../components/OrderCard/OrderCard";
import ErrorMessage from "@shared/components/ErrorMessage";
import { useOrdersListPage } from "../../hooks/ui/OrdersListPage.hooks";

import {
  PageWrapper,
  PageTitle,
  EmptyState,
  BackLinkWrapper,
  PaginationSection,
  PaginationSummary,
} from "./OrdersListPage.styles";

const OrdersPage = () => {
  const { orders, pagination, page, setPage, limit, isLoading, error, isError } = useOrdersListPage();

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
          <ErrorMessage error={error} />
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

  let start = 0;
  let end = 0;
  let totalOrders = 0;

  if (pagination) {
    const { limit, totalOrders: total } = pagination;
    totalOrders = total;
    start = (page - 1) * limit + 1;
    end = Math.min(page * limit, totalOrders);
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
        {pagination && pagination.totalPages > 0 && (
          <PaginationSection>
            <PaginationSummary>
              <span>Showing {start}–{end} of {totalOrders} orders</span>
            </PaginationSummary>
            {pagination.totalPages > 1 && (
              <Pagination
                currentPage={page}
                totalPages={pagination.totalPages}
                onPageChange={setPage}
              />
            )}
          </PaginationSection>
        )}
      </div>
    </PageWrapper>
  );
};

export default OrdersPage;
