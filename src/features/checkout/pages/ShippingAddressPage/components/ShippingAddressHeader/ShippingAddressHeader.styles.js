import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  margin-bottom: 2rem;
`;

export const BackLink = styled.button`
  display: inline-flex;
  align-items: center;
  background: none;
  border: none;
  gap: 0.4rem;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0;
  margin-bottom: 1.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: #000000;
  }
`;

export const FormTitle = styled.h1`
  font-family: var(--font-serif);
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;
