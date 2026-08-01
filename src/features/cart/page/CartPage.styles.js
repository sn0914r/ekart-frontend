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

export const PageTitle = styled.h1`
  font-family: var(--font-serif);
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: -0.02em;

  @media (max-width: 576px) {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    word-wrap: break-word;
  }
`;
