import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  padding: 4rem 0;
  min-height: 80vh;
  min-height: 80dvh;
  background-color: var(--bg-primary);

  @media (max-width: 991px) {
    padding: 2rem 0;
  }
`;

export const BackLinkWrapper = styled.div`
  margin-bottom: 1rem;
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

export const PageTitle = styled.h1`
  font-family: var(--font-serif);
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: var(--text-primary);
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  text-align: center;

  h2 {
    font-family: var(--font-serif);
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
  }

  a {
    color: var(--color-black);
    text-decoration: underline;
    text-transform: uppercase;
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    font-weight: 600;
  }
`;

export const PaginationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  width: 100%;
`;

export const PaginationSummary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;

  span {
    font-size: 0.875rem;
    color: var(--text-secondary);
    font-weight: 500;
  }
`;


