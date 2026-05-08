import { AlertTriangle } from "lucide-react";
import Modal from "@shared/components/Modal/Modal";

const CancelOrderModal = ({
  isOpen,
  onClose,
  isUpdatingOrder,
  executeCancel,
}) => {
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
        onClick={onClose}
        disabled={isUpdatingOrder}
      >
        Keep Order
      </button>
      <button
        className="btn btn-danger px-4"
        onClick={executeCancel}
        disabled={isUpdatingOrder}
      >
        {isUpdatingOrder ? "Canceling..." : "Confirm Cancel"}
      </button>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => !isUpdatingOrder && onClose()}
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
  );
};

export default CancelOrderModal;
