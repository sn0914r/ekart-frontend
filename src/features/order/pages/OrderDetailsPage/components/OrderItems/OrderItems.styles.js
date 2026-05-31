import styled from "@emotion/styled";

export const ItemsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ItemRowCard = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  @media (min-width: 768px) {
    align-items: center;
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "name"
    "meta"
    "price";
  gap: 0.25rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "name price"
      "meta price";
    gap: 0.25rem 1rem;
    align-items: center;
  }
`;

export const ItemName = styled.div`
  grid-area: name;
  font-family: var(--font-serif);
  font-size: 1.1rem;
  color: var(--text-primary);
`;

export const ItemMeta = styled.div`
  grid-area: meta;
  font-size: 0.85rem;
  color: var(--text-secondary);
`;

export const ItemPrice = styled.div`
  grid-area: price;
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-primary);
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: 768px) {
    margin-top: 0;
    justify-content: flex-end;
  }
`;
