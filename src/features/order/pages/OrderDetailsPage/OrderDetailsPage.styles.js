import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  padding: 2rem 0;
  min-height: 80vh;
  min-height: 80dvh;
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
