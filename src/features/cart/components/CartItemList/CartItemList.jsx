import { toast } from "sonner";
import CartItem from "../CartItem/CartItem";

import { useIncrementQuantityMutation } from "../../hooks/api/useIncrementQuantityMutation";
import { useDecrementQuantityMutation } from "../../hooks/api/useDecrementQuantityMutation";
import { useRemoveFromCartMutation } from "../../hooks/api/useRemoveFromCartMutation";

import * as S from "./CartItemList.styles";

const CartItemList = ({ items }) => {
  const { mutate: increaseQty } = useIncrementQuantityMutation();
  const { mutate: decreaseQty } = useDecrementQuantityMutation();
  const { mutate: removeItem } = useRemoveFromCartMutation();

  const handleIncrease = (productId) => increaseQty(productId);
  const handleDecrease = (productId) => decreaseQty(productId);
  const handleRemove = (productId) => {
    removeItem(productId, {
      onSuccess: () => toast.info("Item removed from cart"),
      onError: (err) => toast.error(err.message || "Failed to remove item"),
    });
  };

  return (
    <S.ListContainer>
      {items.map((item) => (
        <CartItem
          key={item.productId}
          item={item}
          increaseQty={handleIncrease}
          decreaseQty={handleDecrease}
          removeFromCart={handleRemove}
        />
      ))}
    </S.ListContainer>
  );
};

export default CartItemList;
