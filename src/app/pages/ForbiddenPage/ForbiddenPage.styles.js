import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  min-height: 80vh;
  min-height: 80dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const LogoutContainer = styled.div`
  text-align: center;
  border-top: 1px solid var(--border-color, #e5e5e5);
  padding-top: 2rem;
  width: 100%;
  max-width: 400px;
`;

export const LogoutText = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const LogoutBtn = styled.button`
  background: transparent;
  border: 1px solid var(--color-danger, #dc2626);
  color: var(--color-danger, #dc2626);
  padding: 0.75rem 1.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-danger, #dc2626);
    color: #fff;
  }
`;
