import Modal from "@shared/components/Modal/Modal";

const CancelOrderModal = ({
  isOpen,
  onClose,
  isUpdatingOrder,
  executeCancel,
  order,
  itemCount,
  totalAmount,
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
        style={{
          fontFamily: "var(--font-sans)",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          fontSize: "0.85rem",
          fontWeight: "600",
          whiteSpace: "nowrap",
        }}
      >
        Keep Order
      </button>
      <button
        className="btn btn-danger px-4"
        onClick={executeCancel}
        disabled={isUpdatingOrder}
        style={{
          fontFamily: "var(--font-sans)",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          fontSize: "0.85rem",
          fontWeight: "600",
          whiteSpace: "nowrap",
        }}
      >
        {isUpdatingOrder ? "Canceling..." : "Cancel Order"}
      </button>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => !isUpdatingOrder && onClose()}
      title={
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.2rem",
            letterSpacing: "0.05em",
          }}
        >
          CANCEL ORDER
        </div>
      }
      maxWidth="500px"
      footer={cancelModalFooter}
      hideCloseButton={true}
    >
      <div style={{ padding: "0.5rem 0 1.25rem 0" }}>
        {order && (
          <div style={{ marginBottom: "1.25rem" }}>
            <h4
              style={{
                margin: 0,
                marginBottom: "0.25rem",
                fontSize: "1.1rem",
                color: "var(--text-primary)",
              }}
            >
              Order #{order.orderId || order._id}
            </h4>
            <div
              style={{
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>
                {itemCount} item{itemCount !== 1 ? "s" : ""}
              </span>
              <span>•</span>
              <span style={{ fontWeight: "600", color: "var(--text-primary)" }}>
                Rs {totalAmount?.toLocaleString()}
              </span>
            </div>
          </div>
        )}

        <p
          style={{
            margin: 0,
            color: "var(--text-primary)",
            fontSize: "0.95rem",
            lineHeight: "1.6",
          }}
        >
          Are you sure you want to cancel this order?
          <br />
          <span
            style={{
              color: "var(--color-error)",
              marginTop: "0.5rem",
              display: "inline-block",
            }}
          >
            This action cannot be undone.
          </span>
        </p>
      </div>
    </Modal>
  );
};

export default CancelOrderModal;
