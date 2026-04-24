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
            item.thumbnail ||
            `https://placehold.co/600x800/f5f5f5/1a1a1a?text=${item.name}`
          }
          alt={item.name}
        />
      </ItemImage>
      <ItemInfo>
        <ItemHeader>
          <div>
            <ItemName>{item.name}</ItemName>
            {item.size && (
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-secondary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Size: {item.size}
              </span>
            )}
          </div>
          <ItemPrice>₨ {item.price?.toLocaleString()}</ItemPrice>
        </ItemHeader>

        <Controls>
          <QtyBox>
            <QtyBtn onClick={() => decreaseQty(item.productId)}>
              <Minus size={14} />
            </QtyBtn>
            <QtyValue>{item.quantity}</QtyValue>
            <QtyBtn onClick={() => increaseQty(item.productId)}>
              <Plus size={14} />
            </QtyBtn>
          </QtyBox>
          <RemoveBtn
            onClick={() => removeFromCart(item.productId)}
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
