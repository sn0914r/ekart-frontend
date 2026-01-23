import { useState } from "react";
import styled from "@emotion/styled";
import { Plus, Minus } from "lucide-react";
import { useCartContext } from "../context/CartContext";

const Card = styled.div`
  margin-bottom: 4rem;
  cursor: pointer;
  background-color: var(--bg-primary);
  position: relative;
`;

const ImageBox = styled.div`
  position: relative;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background-color: var(--bg-secondary);
  margin-bottom: 1.5rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 1.2s cubic-bezier(0.19, 1, 0.22, 1);
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const CartStrip = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3.5rem;
  background-color: #000;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  cursor: pointer;
  transform: translateY(100%);
  transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 10;
  padding-bottom: 0.5rem; /* Optical balance */

  ${Card}:hover & {
    transform: translateY(0);
  }

  &:hover {
    background-color: #1a1a1a;
  }
`;

const ActionText = styled.span`
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  opacity: 0.9;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.4s ease;
  transform: ${(props) => (props.isRotated ? "rotate(180deg)" : "rotate(0)")};
`;

const Label = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Name = styled.h3`
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0;
  letter-spacing: -0.01em;
  text-decoration: uppercase;
`;

const Category = styled.p`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
`;

const Price = styled.span`
  font-size: 0.85rem;
  font-weight: 400;
  color: var(--text-primary);
`;

const ProductCard = ({ imageUrl, name, price, stock, id }) => {
  const [isAdded, setIsAdded] = useState(false);

  const { addToCart, removeFromCart } = useCartContext();

  const handleCartClick = (e) => {
    e.stopPropagation();
    if (isAdded) {
      removeFromCart(id);
    } else {
      addToCart({ id, name, price, stock, imageUrl });
    }
    setIsAdded(!isAdded);
  };

  return (
    <Card data-id={id}>
      <ImageBox>
        <Img
          src={
            imageUrl ||
            `https://placehold.co/600x800/f5f5f5/1a1a1a?text=${name}`
          }
          alt={name}
        />
        <CartStrip
          aria-label={isAdded ? "Remove from cart" : "Add to cart"}
          onClick={handleCartClick}
        >
          <ActionText>
            {isAdded ? "REMOVE FROM CART" : "ADD TO CART"}
          </ActionText>
          <IconBox isRotated={isAdded}>
            {isAdded ? (
              <Minus size={16} strokeWidth={2} />
            ) : (
              <Plus size={16} strokeWidth={2} />
            )}
          </IconBox>
        </CartStrip>
      </ImageBox>
      <Category>Available Stock: {stock}</Category>
      <Label>
        <Name>{name}</Name>
        <Price>₨ {price.toFixed(0)}</Price>
      </Label>
    </Card>
  );
};

export default ProductCard;
