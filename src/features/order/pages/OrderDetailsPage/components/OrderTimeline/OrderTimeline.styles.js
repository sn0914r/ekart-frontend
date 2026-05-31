import styled from "@emotion/styled";

export const TimelineContainer = styled.div`
  position: relative;
  margin-top: 1.5rem;

  &::before {
    content: "";
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: 11px;
    width: 2px;
    background-color: var(--color-border);
    opacity: 0.4;
  }
`;

export const TimelineItem = styled.div`
  position: relative;
  padding-left: 2.5rem;
  margin-bottom: 2.25rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.completed ? "var(--color-success-bg)" : "var(--bg-primary)"};
  border: 2px solid
    ${(props) =>
      props.completed ? "var(--color-success)" : props.active ? "var(--text-primary)" : "var(--color-border)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.completed ? "var(--color-success)" : props.active ? "var(--text-primary)" : "var(--text-muted)"};
  z-index: 1;

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  opacity: ${(props) => (props.completed || props.active ? 1 : 0.4)};
`;

export const ItemLabel = styled.span`
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: ${(props) => (props.completed || props.active ? "600" : "500")};
  color: ${(props) => (props.active ? "var(--text-primary)" : "inherit")};
`;

export const ItemDate = styled.span`
  font-size: 0.75rem;
  color: var(--text-secondary);
`;
