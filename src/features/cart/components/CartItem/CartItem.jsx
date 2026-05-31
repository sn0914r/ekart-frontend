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
          <div style={{ display: "flex", flexDirection: "column" }}>
            <S.ItemName>{item.name}</S.ItemName>
            {(item.size || item.color) && (
              <S.VariantContainer>
                {item.size && <S.VariantText>Size: {item.size}</S.VariantText>}
                {item.color && (
                  <S.VariantText>Color: {item.color}</S.VariantText>
                )}
              </S.VariantContainer>
            )}
            <S.ItemPrice style={{ marginTop: "1rem" }}>
              ₨ {item.price?.toLocaleString()}
            </S.ItemPrice>
          </div>
        </S.ItemHeader>

        <S.Controls>
          <S.QtyBox>
            <S.QtyBtn
              onClick={() => decreaseQty(item.productId)}
              disabled={item.quantity <= 1}
            >
              <Minus size={14} />
            </S.QtyBtn>
            <S.QtyValue>{item.quantity}</S.QtyValue>
            <S.QtyBtn
              onClick={() => increaseQty(item.productId)}
              disabled={item.quantity >= (item.stock || 99)}
            >
              <Plus size={14} />
            </S.QtyBtn>
          </S.QtyBox>
          <S.RemoveBtn
            onClick={() => removeFromCart(item.productId)}
            aria-label="Remove item"
          >
            <Trash2 size={20} strokeWidth={1.5} />
          </S.RemoveBtn>
        </S.Controls>
      </S.ItemInfo>
    </S.ItemWrapper>
  );
};

export default CartItem;
