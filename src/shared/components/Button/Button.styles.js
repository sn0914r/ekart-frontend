import styled from "@emotion/styled";

export const StyledButton = styled.button`
  background-color: var(--color-black);
  color: var(--bg-white);
  border: none;
  padding: 1.25rem;
  width: 100%;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--color-black-hover);
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: var(--color-muted);
    cursor: not-allowed;
    transform: none;
  }
`;
