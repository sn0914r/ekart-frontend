import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  padding: 4rem 0;
  min-height: 80vh;
  background-color: #fafafa;
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const PageTitle = styled.h1`
  font-family: var(--font-serif);
  font-size: 2.5rem;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: var(--text-primary);
`;

export const BackButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #000000;
  padding: 0.75rem 1.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const Section = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  padding: 1.5rem;
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-serif);
  font-size: 1.25rem;
  margin: 0 0 1.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-primary);
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #f0f0f0;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoLabel = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-secondary);
  font-weight: 600;
  flex-shrink: 0;
`;

export const InfoValue = styled.span`
  font-size: 0.875rem;
  color: var(--text-primary);
  text-align: right;
  word-break: break-word;
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ItemCard = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background-color: #fafafa;
  border: 1px solid #f0f0f0;
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  flex-shrink: 0;
`;

export const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ItemName = styled.div`
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-primary);
`;

export const ItemInfo = styled.div`
  font-size: 0.875rem;
  color: var(--text-secondary);
`;

export const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const HistoryItem = styled.div`
  padding: 0.75rem;
  background-color: #fafafa;
  border-left: 3px solid #000000;
`;

export const HistoryStatus = styled.div`
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
`;

export const HistoryDate = styled.div`
  font-size: 0.75rem;
  color: var(--text-secondary);
`;

export const TotalSection = styled.div`
  background-color: #000000;
  color: #ffffff;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

export const TotalLabel = styled.span`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
`;

export const TotalAmount = styled.span`
  font-family: var(--font-serif);
  font-size: 2rem;
  font-weight: 600;
`;

export const UpdateStatusSection = styled.div`
  background-color: #f5f5f5;
  border: 2px solid #000000;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

export const UpdateStatusTitle = styled.h3`
  font-family: var(--font-serif);
  font-size: 1rem;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-primary);
`;

export const StatusButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const StatusButton = styled.button`
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

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    transform: none;
  }
`;

export const NoActionsText = styled.p`
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin: 0;
  font-style: italic;
`;
