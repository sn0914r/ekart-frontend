import {
  InfoContainer,
  TitleBox,
  Title,
  Price,
  CategoryTag,
  DescriptionBox,
} from "./ProductInfo.styles";

const ProductInfo = ({ product }) => {
  if (!product) return null;

  return (
    <InfoContainer>
      <TitleBox>
        {product.category && <CategoryTag>{product.category}</CategoryTag>}
        <Title>{product.name}</Title>
        <Price>Rs {(product.price || 0).toLocaleString()}</Price>
      </TitleBox>
      <DescriptionBox>
        {product.description || "No description provided format for this product."}
      </DescriptionBox>
    </InfoContainer>
  );
};

export default ProductInfo;
