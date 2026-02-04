import styled from "@emotion/styled";
import { CartStrip } from "./CartButton.styles";

export const CardWrapper = styled.div`
  /* width: 100%; */
  /* max-width: 400px; */
  background-color: var(--bg-primary);
  /* Hover state for child image */
  &:hover img {
    transform: scale(1.05);
  }
  &:hover ${CartStrip} {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 3/4;
  width: 100%;
  overflow: hidden;
  background-color: #f5f5f5;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease-out;
`;

export const SoldOutOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
`;

export const SoldOutText = styled.span`
  font-family: var(--font-serif);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-loose);
  color: var(--text-primary);
`;

export const ProductName = styled.h3`
  font-family: var(--font-serif);
  font-size: 1.125rem;
  font-weight: 400;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;

export const Price = styled.span`
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
  flex-shrink: 0;
`;

export const StockInfo = styled.div`
  font-family: var(--font-sans);
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-loose);
  color: var(--text-primary);
  opacity: 0.6;
`;
