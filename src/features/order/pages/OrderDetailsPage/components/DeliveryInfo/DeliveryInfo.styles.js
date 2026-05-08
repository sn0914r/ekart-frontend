import styled from "@emotion/styled";

export const EditActionButton = styled.button`
  background: transparent;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  transition: color 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    color: var(--text-primary);
  }
`;
