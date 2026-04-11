import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import { useCartContext } from "@features/cart/CartContext";

import { CartStrip, ActionText, IconBox } from "./CartButton.styles";

const CartButton = ({ product }) => {
  const { addToCart, removeFromCart, checkItem } = useCartContext();
  const productId = product.id;

  const [isAdded, setIsAdded] = useState(checkItem(productId));

  const handleClick = () => {
    if (isAdded) {
      removeFromCart(productId);
    } else {
      addToCart(product);
    }
    setIsAdded(!isAdded);
  };

  return (
    <CartStrip
      aria-label={isAdded ? "Remove from cart" : "Add to cart"}
      onClick={handleClick}
    >
      <ActionText>{isAdded ? "REMOVE FROM CART" : "ADD TO CART"}</ActionText>
      <IconBox isRotated={isAdded}>
        {isAdded ? (
          <Minus size={16} strokeWidth={2} />
        ) : (
          <Plus size={16} strokeWidth={2} />
        )}
      </IconBox>
    </CartStrip>
  );
};

export default CartButton;
