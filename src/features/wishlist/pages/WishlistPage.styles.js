import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  min-height: 70vh;
`;

export const PageTitle = styled.h1`
  font-family: var(--font-serif);
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 0;
  color: var(--color-muted);

  p {
    margin-bottom: 1.5rem;
  }
`;
