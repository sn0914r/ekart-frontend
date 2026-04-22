import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  padding: 4rem 0;
  min-height: 80vh;
  background-color: var(--bg-primary);
`;

export const BackLinkWrapper = styled.div`
  margin-bottom: 1.5rem;
  a {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-secondary);
    cursor: pointer;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #000000;
    }
  }
`;

export const ContentCard = styled.div`
  background: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 2rem;
  margin-bottom: 2rem;
`;

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
`;

export const OrderTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const OrderTitle = styled.h1`
  font-family: var(--font-serif);
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  word-break: break-all;
  margin: 0;
`;

export const OrderSubtitle = styled.p`
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0;
`;

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const StatCard = styled.div`
  background: #ffffff;
  border: 1px solid #eee;
  border-radius: 6px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.02);
`;

export const StatCardLabel = styled.div`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-serif);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  min-width: 200px;
`;

export const EditActionButton = styled.button`
  background: transparent;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  transition: color 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    color: var(--text-primary);
  }
`;

export const TitleIcon = styled.span`
  color: var(--text-primary);
  display: flex;
`;

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

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-family: var(--font-sans);
  font-size: 0.95rem;
  color: ${(props) => (props.isTotal ? "#000" : "var(--text-secondary)")};
  font-weight: ${(props) => (props.isTotal ? "700" : "400")};
  font-size: ${(props) => (props.isTotal ? "1.2rem" : "0.95rem")};
  border-top: ${(props) => (props.isTotal ? "1px solid #ddd" : "none")};
  padding-top: ${(props) => (props.isTotal ? "1rem" : "0")};
  margin-top: ${(props) => (props.isTotal ? "1rem" : "0")};
`;

export const SummaryLabel = styled.span`
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
`;

export const SummaryValue = styled.span`
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
`;

export const InfoBlockRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoIconWrapper = styled.div`
  color: var(--text-secondary);
  display: flex;
  padding-top: 0.15rem;
`;

export const InfoTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const InfoLabel = styled.div`
  font-size: 0.85rem;
  color: var(--text-secondary);
`;

export const InfoValue = styled.div`
  font-size: 0.95rem;
  color: var(--text-primary);
  line-height: 1.6;
`;

export const DangerButton = styled.button`
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--color-error);
  background: transparent;
  color: var(--color-error);
  font-family: var(--font-sans);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 4px;

  &:hover:not(:disabled) {
    background: var(--color-error);
    color: var(--bg-white);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
