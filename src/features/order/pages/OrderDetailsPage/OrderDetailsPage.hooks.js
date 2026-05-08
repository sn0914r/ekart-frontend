import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { useGetOrderQuery } from "../../hooks/api/useGetOrderQuery";
import { useUpdateOrderMutation } from "../../hooks/api/useUpdateOrderMutation";

export const useOrderDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading, error, isError } = useGetOrderQuery(id);
  const updateOrderMutation = useUpdateOrderMutation();

  // INFO: SHIPPING MODEL
  const [isShippingModalOpen, setIsShippingModalOpen] = useState(false);
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
  const taxAmount = 0; // Adjust if backend starts returning tax
  const shippingFee = 0; // Adjust if backend starts returning shipping config

  return {
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
    isUpdatingOrder: updateOrderMutation.isPending,
  };
};
