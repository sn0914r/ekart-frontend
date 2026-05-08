import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  margin-bottom: 2rem;
`;

export const BackLink = styled.button`
  background: none;
  border: none;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  margin-bottom: 1.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: var(--text-primary);
  }
`;

export const FormTitle = styled.h1`
  font-family: var(--font-serif);
  font-size: 2rem;
  color: var(--text-primary);
`;
