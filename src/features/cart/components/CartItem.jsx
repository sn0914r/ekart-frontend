import { Minus, Plus, Trash2 } from "lucide-react";

import {
  ItemWrapper,
  ItemImage,
  ItemInfo,
  ItemHeader,
  ItemName,
  ItemPrice,
  Controls,
  QtyBox,
  QtyBtn,
  QtyValue,
  RemoveBtn,
} from "./CartItem.styles";

const CartItem = ({ item, increaseQty, decreaseQty, removeFromCart }) => {
  return (
    <ItemWrapper>
      <ItemImage>
        <img
          src={
            item.imageUrl ||
            `https://placehold.co/600x800/f5f5f5/1a1a1a?text=${item.name}`
          }
          alt={item.name}
        />
      </ItemImage>
      <ItemInfo>
        <ItemHeader>
          <ItemName>{item.name}</ItemName>
          <ItemPrice>₨ {item.price.toLocaleString()}</ItemPrice>
        </ItemHeader>

        <Controls>
          <QtyBox>
            <QtyBtn onClick={() => decreaseQty(item.id)}>
              <Minus size={14} />
            </QtyBtn>
            <QtyValue>{item.quantity}</QtyValue>
            <QtyBtn onClick={() => increaseQty(item.id)}>
              <Plus size={14} />
            </QtyBtn>
          </QtyBox>
          <RemoveBtn
            onClick={() => removeFromCart(item.id)}
            aria-label="Remove item"
          >
            <Trash2 size={18} strokeWidth={1.5} />
          </RemoveBtn>
        </Controls>
      </ItemInfo>
    </ItemWrapper>
  );
};

export default CartItem;
