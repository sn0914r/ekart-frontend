import ProductCard from "../ProductCard/ProductCard";
import * as S from "./ProductList.styles";

const ProductList = ({ products, onToggleWishlist, checkItem }) => {
  return (
    <S.ListContainer className="row row-gap-5">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          name={product.name}
          price={product.price}
          stock={product.stock}
          imageUrl={product.images[0]}
          id={product._id}
          className="col-6 col-md-4 col-lg-3"
          isInWishlist={checkItem(product._id)}
          onToggleWishlist={onToggleWishlist}
        />
      ))}
    </S.ListContainer>
  );
};

export default ProductList;
