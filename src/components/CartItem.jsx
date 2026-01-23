import styled from "@emotion/styled";
import { Minus, Plus, Trash2 } from "lucide-react";

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr auto;
  gap: 2.5rem;
  padding: 2.5rem 0;
  border-bottom: 1px solid #eeeeee;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 80px 1fr;
    gap: 1.5rem;
  }
`;

const ItemImage = styled.div`
  aspect-ratio: 3 / 4;
  background-color: var(--bg-secondary);
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ItemName = styled.h3`
  font-family: var(--font-sans);
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0;
`;

const ItemPrice = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin: 0;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-column: 2;
    justify-content: space-between;
    margin-top: 1rem;
  }
`;

const QtyBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border: 1px solid #dddddd;
  padding: 0.5rem 1rem;
`;

const QtyBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: var(--text-primary);
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const QtyValue = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  min-width: 1rem;
  text-align: center;
`;

const RemoveBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #ff4d4d;
  opacity: 0.6;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 1;
  }
`;

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
        <ItemName>{item.name}</ItemName>
        <ItemPrice>₨ {item.price.toLocaleString()}</ItemPrice>
      </ItemInfo>
      <Controls>
        <QtyBox>
          <QtyBtn onClick={() => decreaseQty(item.id)}>
            <Minus size={14} />
          </QtyBtn>
          <QtyValue>{item.qty}</QtyValue>
          <QtyBtn onClick={() => increaseQty(item.id)}>
            <Plus size={14} />
          </QtyBtn>
        </QtyBox>
        <RemoveBtn onClick={() => removeFromCart(item.id)}>
          <Trash2 size={18} strokeWidth={1.5} />
        </RemoveBtn>
      </Controls>
    </ItemWrapper>
  );
};

export default CartItem;
