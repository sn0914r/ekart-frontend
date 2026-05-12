import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const CardWrapper = styled.div`
  background-color: var(--bg-primary);
  /* Hover state for child image */
  &:hover img {
    transform: scale(1.05);
  }
  &:hover .view-product-btn {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ViewProductLink = styled(Link)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3.5rem;
  background-color: var(--bg-dark);
  color: var(--text-on-dark);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  cursor: pointer;
  transform: translateY(100%);
  transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 10;
  padding-bottom: 0.5rem; /* Optical balance */

  &:hover {
    background-color: var(--bg-dark-hover);
    color: var(--text-on-dark);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 3/4;
  width: 100%;
  overflow: hidden;
  background-color: var(--color-subtle-bg);
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
  background-color: var(--color-white-overlay);
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

export const WishlistButtonWrapper = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 15;
  background: var(--bg-white);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px var(--color-shadow-soft);
  color: ${(props) => (props.$active ? "var(--color-error)" : "var(--text-primary)")};
  transition: transform 0.2s, color 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.75rem;
  gap: 0.25rem;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.75rem;
`;

