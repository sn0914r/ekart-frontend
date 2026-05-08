import ProductCard from "@features/product/pages/landing/components/ProductCard/ProductCard";

const WishlistGrid = ({ items, onRemove }) => {
  return (
    <div className="row row-gap-5">
      {items.map((item) => (
        <ProductCard
          key={item.productId}
          id={item.productId}
          name={item.name}
          price={item.price}
          stock={item.stock ?? 10}
          imageUrl={item.thumbnail}
          className="col-6 col-md-4 col-lg-3"
          isInWishlist={true}
          onToggleWishlist={onRemove}
        />
      ))}
    </div>
  );
};

export default WishlistGrid;
