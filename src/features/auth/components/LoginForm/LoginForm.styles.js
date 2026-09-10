import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const ErrorMessage = styled.div`
  color: var(--color-error);
  font-size: 0.85rem;
`;

export const ForgotPasswordLink = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-top: -1rem;
  font-family: inherit;
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-decoration: underline;
  text-underline-offset: 4px;
  cursor: pointer;
  align-self: flex-end;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
    color: var(--text-primary);
  }
`;

