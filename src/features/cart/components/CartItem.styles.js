import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
  display: flex;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: white;
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
  background-color: #f5f5f5;

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
  border: 1px solid rgba(0, 0, 0, 0.1);
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
  transition: background 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
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
  color: #999;
  cursor: pointer;
  transition: color 0.2s;
  padding: 0.5rem;

  &:hover {
    color: #ff4d4d;
  }
`;
