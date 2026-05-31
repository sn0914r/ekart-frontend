import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const CardWrapper = styled.div`
  background: var(--bg-primary, #ffffff);
  border: 1px solid var(--color-border-light, #e5e5e5);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`;

export const CardContent = styled.div`
  padding: 1rem;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

export const OrderId = styled.span`
  font-family: var(--font-sans);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--text-primary);
`;

export const OrderDate = styled.span`
  font-family: var(--font-sans);
  font-size: 0.75rem;
  color: var(--text-secondary);
`;

export const ImageRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  overflow-x: auto;
  padding-bottom: 0.25rem; /* space for scrollbar if needed */
  
  /* hide scrollbar for clean look */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const ImageBox = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 6px;
  background-color: var(--color-subtle-bg, #f5f5f5);
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MoreBadge = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 6px;
  background-color: var(--color-subtle-bg, #f5f5f5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-secondary);
  flex-shrink: 0;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: var(--color-border-light, #e5e5e5);
  width: 100%;
  margin: ${(props) => props.margin || "0"};
`;

export const StatusRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.75rem 0;
`;

export const StatusGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;

export const StatusLabel = styled.span`
  font-family: var(--font-sans);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  color: var(--text-primary);
`;

export const TotalRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
`;

export const ItemCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-sans);
  font-size: 0.85rem;
  color: var(--text-primary);
  font-weight: 500;
`;

export const TotalPriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.15rem;
`;

export const TotalLabel = styled.span`
  font-family: var(--font-sans);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  color: var(--text-secondary);
`;

export const TotalAmount = styled.span`
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
`;

export const FooterLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: var(--bg-primary, #ffffff);
  text-decoration: none;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-primary);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-subtle-bg, #f9fafb);
  }
`;
