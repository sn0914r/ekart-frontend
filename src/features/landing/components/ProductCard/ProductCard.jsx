import {
  CardWrapper,
  ImageContainer,
  ProductImage,
  SoldOutOverlay,
  SoldOutText,
  ProductName,
  Price,
  StockInfo,
  ViewProductLink,
} from "./ProductCard.styles";

import { Link } from "react-router-dom";


const ProductCard = (props) => {
  const { id, imageUrl, name, price, stock, className } = props;
  return (
    <CardWrapper data-id={id} className={className}>
      <ImageContainer>
        <Link
          to={`/product/${id}`}
          style={{
            display: "block",
            height: "100%",
            width: "100%",
            textDecoration: "none",
          }}
        >
          <ProductImage src={imageUrl} alt={name} />
          {stock <= 0 && (
            <SoldOutOverlay>
              <SoldOutText>Sold Out</SoldOutText>
            </SoldOutOverlay>
          )}
        </Link>
        <ViewProductLink to={`/product/${id}`} className="view-product-btn">
          VIEW PRODUCT
        </ViewProductLink>
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
