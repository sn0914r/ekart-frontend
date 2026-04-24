import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, ShoppingBag, Check } from "lucide-react";
import { toast } from "sonner";

import CartHooks from "@features/cart/cart.hooks";
import { useAuthContext } from "@features/auth/AuthContext";
import Button from "@shared/components/Button/Button";

import {
  ActionsContainer,
  SwatchRow,
  SwatchItem,
  ColorSwatch,
  ColorLabel,
  SizeRow,
  SizePill,
  StockBadge,
} from "./ProductActions.styles";

const COLOR_MAP = {
  red: "#ef4444",
  blue: "#3b82f6",
  green: "#22c55e",
  black: "#000000",
  white: "#ffffff",
  yellow: "#eab308",
  gray: "#6b7280",
  purple: "#a855f7",
  pink: "#ec4899",
  orange: "#f97316",
  brown: "#78350f",
};

const ProductActions = ({ product, colors = [] }) => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { checkItem } = CartHooks.useCartData();
  const { mutate: addToCartMutation } = CartHooks.useAddToCart();

  const [activeSize, setActiveSize] = useState("");

  useEffect(() => {
    if (product?.attributes?.size?.length > 0) {
      setActiveSize(product.attributes.size[0]);
    }
  }, [product]);

  if (!product) return null;

  const isAdded = checkItem(product.id || product._id);
  const outOfStock = product.stock <= 0;

  const handleAddToCart = () => {
    if (!user) return;
    if (!isAdded && !outOfStock) {
      addToCartMutation(
        { productId: product.id || product._id, variant: { size: activeSize } },
        {
          onSuccess: () => toast.success("Item added to cart"),
          onError: (err) => toast.error(err.message || "Failed to add item"),
        },
      );
    }
  };

  return (
    <ActionsContainer>
      {/* Colors */}
      {colors && colors.length > 0 && (
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
          <SwatchRow>
            {colors.map((c) => {
              const hex = COLOR_MAP[c.color.toLowerCase()] || c.color;
              return (
                <SwatchItem
                  key={c._id}
                  onClick={() => navigate(`/product/${c._id}`)}
                >
                  <ColorSwatch
                    className="color-circle"
                    colorHex={hex}
                    active={c._id === product._id}
                  />
                  <ColorLabel>
                    {c.color.charAt(0).toUpperCase() + c.color.slice(1)}
                  </ColorLabel>
                </SwatchItem>
              );
            })}
          </SwatchRow>
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
          <SizeRow>
            {product.attributes.size.map((sz) => (
              <SizePill
                key={sz}
                active={activeSize === sz}
                onClick={() => setActiveSize(sz)}
              >
                {sz}
              </SizePill>
            ))}
          </SizeRow>
        </div>
      )}

      {/* Stock Status */}
      <div className="mb-4" style={{ paddingTop: "0.5rem" }}>
        {outOfStock ? (
          <StockBadge outOfStock>Out of Stock</StockBadge>
        ) : (
          <StockBadge>In Stock ({product.stock} available)</StockBadge>
        )}
      </div>

      {/* Actions */}
      {!user ? (
        <Button
          disabled
          style={{
            width: "100%",
            padding: "1rem",
            display: "flex",
            gap: "0.5rem",
            justifyContent: "center",
          }}
        >
          <Lock size={18} /> Login to Add to Bag
        </Button>
      ) : isAdded ? (
        <Button
          disabled
          style={{
            width: "100%",
            padding: "1rem",
            display: "flex",
            gap: "0.5rem",
            justifyContent: "center",
          }}
        >
          <Check size={18} /> Added to Bag
        </Button>
      ) : (
        <Button
          disabled={outOfStock}
          onClick={handleAddToCart}
          style={{
            width: "100%",
            padding: "1rem",
            display: "flex",
            gap: "0.5rem",
            justifyContent: "center",
            background: "var(--color-black, #000)",
            color: "var(--bg-white, #fff)",
            fontSize: "1rem",
            letterSpacing: "0.05em",
          }}
        >
          ADD TO BAG <ShoppingBag size={18} />
        </Button>
      )}
    </ActionsContainer>
  );
};

export default ProductActions;
