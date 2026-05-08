import styled from "@emotion/styled";

export const ItemsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ItemRowCard = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  background: var(--color-subtle-bg);
  border-radius: 4px;
`;

export const ItemDetails = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ItemName = styled.div`
  font-family: var(--font-serif);
  font-size: 1.1rem;
  color: var(--text-primary);
`;

export const ItemMeta = styled.div`
  font-size: 0.85rem;
  color: var(--text-secondary);
`;

export const ItemPrice = styled.div`
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--text-primary);
`;
