import styled from "@emotion/styled";

export const CardContainer = styled.div`
  position: relative;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;
  background-color: #f5f5f5;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const InactiveOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(1px);
`;

export const InactiveText = styled.span`
  font-family: var(--font-serif);
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-loose);
  color: #ffffff;
  font-weight: 500;
`;

export const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
`;

export const ProductTitle = styled.h3`
  font-family: var(--font-serif);
  font-size: 1.125rem;
  font-weight: 400;
  color: var(--text-primary);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PriceText = styled.div`
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
`;

export const StockBadge = styled.span`
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.5rem;
  border-radius: 2px;
  background-color: ${(props) =>
    props.stock <= 0 ? "#ff4444" : props.stock < 10 ? "#ff9800" : "#4caf50"};
  color: #ffffff;
`;

export const StatusBadge = styled.span`
  display: inline-block;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.5rem;
  border-radius: 2px;
  background-color: ${(props) => (props.isActive ? "#4caf50" : "#9e9e9e")};
  color: #ffffff;
`;

export const EditButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;

  &:hover {
    background-color: #333333;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 2rem;
  height: 2rem;
  background-color: #ff4444;
  color: #ffffff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  pointer-events: none;

  ${CardContainer}:hover & {
    opacity: 1;
    pointer-events: auto;
  }

  &:hover {
    background-color: #cc0000;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;
