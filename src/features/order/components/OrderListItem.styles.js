import styled from "@emotion/styled";

export const OrderCard = styled.div`
  display: block;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  background: #fff;
  transition: all 0.2s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    border-color: #000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
  }
`;

export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f0f0f0;
`;

export const OrderId = styled.div`
  font-family: var(--font-sans);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  font-weight: 600;
  flex-shrink: 1;
  min-width: 0;
`;

export const OrderDate = styled.div`
  font-size: 0.85rem;
  color: var(--text-secondary);
  flex-shrink: 0;
  white-space: nowrap;
`;

export const OrderBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
`;

export const StatusRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatusLabel = styled.span`
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
`;

export const OrderFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
`;

export const TotalLabel = styled.span`
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const TotalAmount = styled.span`
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
`;
