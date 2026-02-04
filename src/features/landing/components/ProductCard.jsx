import {
  CardWrapper,
  ImageContainer,
  ProductImage,
  SoldOutOverlay,
  SoldOutText,
  ProductName,
  Price,
  StockInfo,
} from "./ProductCard.styles";
import CartButton from "./CartButton";

const ProductCard = (props) => {
  const { name, price, stock, imageUrl, id, className } = props;
  return (
    <CardWrapper data-id={id} className={className}>
      <ImageContainer>
        <ProductImage src={imageUrl} alt={name} />
        {stock <= 0 && (
          <SoldOutOverlay>
            <SoldOutText>Sold Out</SoldOutText>
          </SoldOutOverlay>
        )}
        <CartButton product={{ ...props }} />
      </ImageContainer>

      {/* Content using Bootstrap Utilities */}
      <div className="d-flex flex-column pt-3 gap-1">
        <div className="d-flex justify-content-between align-items-baseline gap-3">
          <ProductName title={name}>{name}</ProductName>
          <Price>₹{price}</Price>
        </div>
        <StockInfo>{stock} Stock</StockInfo>
      </div>
    </CardWrapper>
  );
};

export default ProductCard;
