import EmptyState from "@shared/components/EmptyState";

const WishlistEmptyState = () => {
  return (
    <EmptyState
      watermark="EMPTY"
      title="Wishlist is Empty"
      description="Save products you love and find them here."
      actionText="Start Shopping"
      actionLink="/"
    />
  );
};

export default WishlistEmptyState;
