import styled from "@emotion/styled";

export const EmptyContainer = styled.div`
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
