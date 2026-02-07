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

export const OrdersList = styled.div`
  /* Additional styling if needed beyond Bootstrap grid */
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  text-align: center;
  padding: 2rem;
`;

export const EmptyStateText = styled.p`
  font-family: var(--font-serif);
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin: 0;
`;
