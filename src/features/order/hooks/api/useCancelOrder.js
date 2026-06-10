import { toast } from "@lib/toast";
import { useUpdateOrderMutation } from "./useUpdateOrderMutation";

export const useCancelOrder = (orderId, closeModelSetState) => {
  const { mutate } = useUpdateOrderMutation();
  const payload = { id: orderId, orderStatus: "CANCELLED" };
  const onSuccess = () => toast.success("Order cancelled");
  const onError = (err) => toast.error(err.message || "Cancellation failed");
  const onSettled = () => closeModelSetState(false);

  const cancelOrder = () => mutate(payload, { onSuccess, onError, onSettled });
  return cancelOrder;
};
