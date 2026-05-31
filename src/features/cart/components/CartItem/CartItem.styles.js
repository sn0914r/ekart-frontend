import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
  display: flex;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--color-overlay);
  background: var(--bg-primary);
  gap: 1.5rem;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 576px) {
    gap: 1rem;
  }
`;

export const ItemImage = styled.div`
  width: 100px;
  height: 120px;
  flex-shrink: 0;
  background-color: var(--color-subtle-bg);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 576px) {
    width: 80px;
    height: 100px;
  }
`;

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const ItemName = styled.h3`
  font-family: var(--font-serif);
  font-size: 1.1rem;
  color: var(--text-primary);
  margin: 0;
  padding-right: 1rem;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

export const VariantContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 0.5rem;
`;

export const VariantText = styled.span`
  font-family: var(--font-sans);
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-transform: capitalize;
`;

export const ItemPrice = styled.div`
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 1rem;
  color: var(--text-primary);
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
`;

export const QtyBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--color-overlay);
`;

export const QtyBtn = styled.button`
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-primary);
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background-color: var(--color-shadow-soft);
  }

  &:disabled {
    color: var(--color-muted);
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const QtyValue = styled.span`
  font-family: var(--font-sans);
  font-size: 0.9rem;
  width: 32px;
  text-align: center;
`;

export const RemoveBtn = styled.button`
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--color-error, #ef4444);
    background-color: rgba(239, 68, 68, 0.1);
    transform: scale(1.05);
  }
`;
