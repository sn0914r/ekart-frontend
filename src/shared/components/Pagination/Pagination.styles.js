import styled from "@emotion/styled";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

export const PaginationButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.5rem;
  height: 2.5rem;
  padding: 0 0.75rem;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => (props.active ? "var(--bg-primary)" : "var(--text-primary)")};
  background-color: ${(props) => (props.active ? "var(--color-black)" : "transparent")};
  border: ${(props) => (props.active ? "var(--border-fine)" : "1px solid transparent")};
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  transition: all 0.2s ease;

  @media (hover: hover) and (pointer: fine) {
    &.nav-btn:hover:not(:disabled) {
      background-color: var(--color-input-focus-bg);
      opacity: 0.8;
    }

    &.page-btn:hover:not(:disabled) {
      background-color: ${(props) => (props.active ? "var(--color-black-hover)" : "var(--color-subtle-bg)")};
      border: ${(props) => (props.active ? "var(--border-fine)" : "1px solid var(--color-subtle-border)")};
    }
  }
`;

export const PaginationEllipsis = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.5rem;
  height: 2.5rem;
  color: var(--text-secondary);
`;
