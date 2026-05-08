import styled from "@emotion/styled";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

export const PageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  border: 1px solid var(--color-border);
  background: ${(props) => (props.active ? "var(--bg-dark)" : "var(--bg-primary)")};
  color: ${(props) => (props.active ? "var(--text-on-dark)" : "var(--text-primary)")};
  font-family: var(--font-sans);
  font-weight: ${(props) => (props.active ? "500" : "400")};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover:not(:disabled) {
    background: ${(props) => (props.active ? "var(--bg-dark-hover)" : "var(--color-subtle-bg)")};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    color: var(--color-muted);
    border-color: var(--color-border-light);
  }
`;

export const Ellipsis = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: var(--text-primary);
  font-family: var(--font-sans);
`;
