import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Error from "../../../shared/components/Error";
import Loader from "../../../shared/components/Loader";
import AdminQuery from "../admin.query";
import AdminOrderCard from "../components/AdminOrderCard";
import {
  PageWrapper,
  PageHeader,
  PageTitle,
  EmptyState,
  EmptyStateText,
  BackLink,
} from "./AdminOrdersPage.styles";

const AdminOrdersPage = () => {
  const {
    data: orders,
    isLoading,
    error,
    isError,
  } = AdminQuery.useGetAllOrdersAdmin();

  const navigate = useNavigate();

  const handleViewOrder = (order) => {
    navigate(`/admin/orders/${order._id}`, { state: order });
  };

  if (isError) {
    return <Error message={error?.message} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <PageWrapper>
      <div className="container">
        <BackLink onClick={() => navigate(-1)}>
          <ArrowLeft size={14} /> Back
        </BackLink>
        <PageHeader>
          <PageTitle>Orders</PageTitle>
        </PageHeader>

        {orders?.length === 0 ? (
          <EmptyState>
            <EmptyStateText>No orders found</EmptyStateText>
          </EmptyState>
        ) : (
          <div className="row g-4">
            {orders?.map((order) => (
              <div key={order._id} className="col-12">
                <AdminOrderCard order={order} onView={handleViewOrder} />
              </div>
            ))}
          </div>
        )}
      </div>
    </PageWrapper>
  );
};

export default AdminOrdersPage;
