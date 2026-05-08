import styled from "@emotion/styled";

export const ContentCard = styled.div`
  background: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 2rem;
  margin-bottom: 2rem;
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

export const TitleIcon = styled.span`
  color: var(--text-primary);
  display: flex;
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
