import styled from "@emotion/styled";

export const OrderCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #000000;
  }
`;

export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f0f0f0;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const OrderId = styled.div`
  font-family: var(--font-sans);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  font-weight: 600;
`;

export const DateSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: var(--text-secondary);
`;

export const DateLabel = styled.span`
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const DateValue = styled.span`
  color: var(--text-primary);
`;

export const OrderBody = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InfoLabel = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-secondary);
  font-weight: 600;
`;

export const InfoValue = styled.span`
  font-family: var(--font-serif);
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--text-primary);
`;

export const StatusSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

export const OrderFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const TotalSection = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`;

export const TotalLabel = styled.span`
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-secondary);
  font-weight: 600;
`;

export const TotalAmount = styled.span`
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
`;

export const ViewButton = styled.button`
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

  &:hover {
    background-color: #333333;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
