import styled from "@emotion/styled";

export const BackLink = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-primary);
  cursor: pointer;
  margin-bottom: 2rem;
  padding: 0;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;
