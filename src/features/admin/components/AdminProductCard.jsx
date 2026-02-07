import {
  CardContainer,
  ImageWrapper,
  ProductImage,
  InactiveOverlay,
  InactiveText,
  CardContent,
  ProductTitle,
  PriceText,
  StockBadge,
  StatusBadge,
  EditButton,
} from "./AdminProductCard.styles";

const AdminProductCard = ({ product, editHandler }) => {
  const { imageUrl, isActive, name, price, stock, id } = product;

  return (
    <CardContainer>
      <ImageWrapper>
        <ProductImage src={imageUrl} alt={name} />
        {!isActive && (
          <InactiveOverlay>
            <InactiveText>Inactive</InactiveText>
          </InactiveOverlay>
        )}
      </ImageWrapper>

      <CardContent>
        <ProductTitle title={name}>{name}</ProductTitle>

        <PriceText>₹{price}</PriceText>

        <div className="d-flex gap-2 flex-wrap">
          <StockBadge stock={stock}>
            {stock <= 0 ? "Out of Stock" : `${stock} in Stock`}
          </StockBadge>
          <StatusBadge isActive={isActive}>
            {isActive ? "Active" : "Inactive"}
          </StatusBadge>
        </div>

        <EditButton onClick={() => editHandler(product)}>
          Edit Product
        </EditButton>
      </CardContent>
    </CardContainer>
  );
};

export default AdminProductCard;
