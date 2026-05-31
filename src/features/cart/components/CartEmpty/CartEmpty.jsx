import EmptyState from "@shared/components/EmptyState";

const CartEmpty = () => {
  return (
    <div className="container">
      <EmptyState
        watermark="EMPTY"
        title="Cart is Empty"
        description="Add products to your cart and start shopping."
        actionText="Start Shopping"
        actionLink="/"
      />
    </div>
  );
};

export default CartEmpty;
