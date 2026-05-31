import styled from "@emotion/styled";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1.5rem;
`;

export const Title = styled.h1`
  font-family: var(--font-serif);
  font-size: 2.25rem;
  font-weight: 400;
  color: var(--text-primary);
  margin: 0;
  letter-spacing: var(--letter-spacing-tight, -0.02em);

  @media (max-width: 576px) {
    font-size: 1.75rem;
  }
`;

export const Price = styled.div`
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--text-primary);
`;

export const CategoryTag = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  font-weight: 600;
`;

export const DescriptionBox = styled.div`
  font-family: var(--font-sans);
  font-size: 0.85rem;
  line-height: 1.7;
  color: #666666;
  padding-top: 2rem;
`;
