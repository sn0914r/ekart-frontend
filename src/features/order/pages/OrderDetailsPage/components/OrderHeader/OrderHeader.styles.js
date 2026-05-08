import styled from "@emotion/styled";

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #eee;
`;

export const OrderTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const OrderTitle = styled.h1`
  font-family: var(--font-serif);
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  word-break: break-all;
  margin: 0;
`;

export const OrderSubtitle = styled.p`
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin: 0;
`;

export const DangerButton = styled.button`
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--color-error);
  background: transparent;
  color: var(--color-error);
  font-family: var(--font-sans);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 4px;

  &:hover:not(:disabled) {
    background: var(--color-error);
    color: var(--bg-white);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
