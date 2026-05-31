import styled from "@emotion/styled";

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
