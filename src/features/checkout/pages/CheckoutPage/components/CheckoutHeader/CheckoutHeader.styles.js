import styled from "@emotion/styled";

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
  margin-bottom: 2rem;
  transition: color 0.2s ease;

  &:hover {
    color: var(--text-primary);
  }
`;
