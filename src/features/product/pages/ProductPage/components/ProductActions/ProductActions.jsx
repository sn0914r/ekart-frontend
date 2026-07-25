import { useNavigate, Link } from "react-router-dom";
import { Lock, ShoppingBag, Check } from "lucide-react";
import { useProductActions } from "../../../../hooks/ui/useProductActions";
import { COLOR_MAP } from "../../../../constants/productColors";
import * as S from "./ProductActions.styles";

const ProductActions = ({ product, colors = [] }) => {
  const navigate = useNavigate();
  const {
    isAuthenticated,
    isAdded,
    outOfStock,
    activeSize,
    setActiveSize,
    handleAddToCart,
    isAddingToCart,
  } = useProductActions(product);

  if (!product) return null;

  return (
    <S.ActionsContainer>
      {/* Colors */}
      {colors && colors.length > 1 && (
        <div className="mb-4">
          <h6
            className="mb-3"
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              fontFamily: "var(--font-sans)",
              color: "var(--text-primary)",
            }}
          >
            Color
          </h6>
          <S.SwatchRow>
            {colors.map((c) => {
              const hex = COLOR_MAP[c.color.toLowerCase()] || c.color;
              return (
                <S.SwatchItem
                  key={c._id}
                  onClick={() => navigate(`/product/${c._id}`)}
                >
                  <S.ColorSwatch
                    className="color-circle"
                    colorHex={hex}
                    active={c._id === product._id}
                  />
                  <S.ColorLabel>
                    {c.color.charAt(0).toUpperCase() + c.color.slice(1)}
                  </S.ColorLabel>
                </S.SwatchItem>
              );
            })}
          </S.SwatchRow>
        </div>
      )}

      {/* Sizes */}
      {product.attributes?.size && product.attributes.size.length > 0 && (
        <div className="mb-4">
          <h6
            className="mb-3"
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              fontFamily: "var(--font-sans)",
              color: "var(--text-primary)",
            }}
          >
            Size
          </h6>
          <S.SizeRow>
            {product.attributes.size.map((sz) => (
              <S.SizePill
                key={sz}
                active={activeSize === sz}
                onClick={() => setActiveSize(sz)}
              >
                {sz}
              </S.SizePill>
            ))}
          </S.SizeRow>
        </div>
      )}

      {/* Stock Status */}
      <div className="mb-4" style={{ paddingTop: "0.5rem" }}>
        {outOfStock ? (
          <S.StockBadge outOfStock>Out of Stock</S.StockBadge>
        ) : (
          <S.StockBadge>In Stock ({product.stock} available)</S.StockBadge>
        )}
      </div>

      {/* Actions */}
      {!isAuthenticated ? (
        <S.ActionBtn onClick={() => navigate("/auth/login")}>
          <Lock size={16} /> Login to Add to Cart
        </S.ActionBtn>
      ) : isAdded ? (
        <S.ActionBtn as={Link} to="/cart">
          <Check size={18} /> ADDED • GO TO CART
        </S.ActionBtn>
      ) : outOfStock ? (
        <S.ActionBtn disabled>OUT OF STOCK</S.ActionBtn>
      ) : (
        <S.ActionBtn onClick={handleAddToCart} disabled={isAddingToCart}>
          ADD TO CART <ShoppingBag size={18} />
        </S.ActionBtn>
      )}
    </S.ActionsContainer>
  );
};

export default ProductActions;
