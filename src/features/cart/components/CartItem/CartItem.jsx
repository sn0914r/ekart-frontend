import { Minus, Plus, Trash2 } from "lucide-react";
import * as S from "./CartItem.styles";

const CartItem = ({ item, increaseQty, decreaseQty, removeFromCart }) => {
  return (
    <S.ItemWrapper>
      <S.ItemImage>
        <img
          src={
            item.thumbnail ||
            `https://placehold.co/600x800/f5f5f5/1a1a1a?text=${item.name}`
          }
          alt={item.name}
        />
      </S.ItemImage>
      <S.ItemInfo>
        <S.ItemHeader>
          <div>
            <S.ItemName>{item.name}</S.ItemName>
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
          <S.ItemPrice>₨ {item.price?.toLocaleString()}</S.ItemPrice>
        </S.ItemHeader>

        <S.Controls>
          <S.QtyBox>
            <S.QtyBtn onClick={() => decreaseQty(item.productId)}>
              <Minus size={14} />
            </S.QtyBtn>
            <S.QtyValue>{item.quantity}</S.QtyValue>
            <S.QtyBtn onClick={() => increaseQty(item.productId)}>
              <Plus size={14} />
            </S.QtyBtn>
          </S.QtyBox>
          <S.RemoveBtn
            onClick={() => removeFromCart(item.productId)}
            aria-label="Remove item"
          >
            <Trash2 size={18} strokeWidth={1.5} />
          </S.RemoveBtn>
        </S.Controls>
      </S.ItemInfo>
    </S.ItemWrapper>
  );
};

export default CartItem;
