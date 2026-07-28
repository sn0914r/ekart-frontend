import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "@lib/toast";
import { useGetOrderQuery } from "../../hooks/api/useGetOrderQuery";
import { useUpdateOrderMutation } from "../../hooks/api/useUpdateOrderMutation";

export const useOrderDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error, isError } = useGetOrderQuery(id);
  const updateOrderMutation = useUpdateOrderMutation();

  // INFO: SHIPPING MODEL
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const order = data?.data;

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

  const isPending = order?.shippingStatus === "PENDING";
  const taxAmount = 0; // INFO: Adjust if backend starts returning tax
  const shippingFee = 0; // INFO: Adjust if backend starts returning shipping config

  const handleRetryPayment = () => {
    if (!order) return;
    navigate("/checkout/payment", { state: { orderId: order._id } });
  };

  return {
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
    isUpdatingOrder: updateOrderMutation.isPending,
    handleRetryPayment,
  };
};
