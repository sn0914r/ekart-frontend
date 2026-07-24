import styled from "@emotion/styled";

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SwatchRow = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    gap: 1rem;
  }
`;

export const SwatchItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  &:hover .color-circle {
    box-shadow:
      0 0 0 2px #fff,
      0 0 0 3px #ccc;
  }
`;

export const ColorSwatch = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.colorHex || "#ccc"};
  box-shadow: ${(props) =>
    props.active
      ? "0 0 0 2px #fff, 0 0 0 3px var(--color-black, #000)"
      : "0 0 0 1px #e5e5e5"};
  transition: all 0.2s ease;
`;

export const ColorLabel = styled.span`
  font-size: 0.75rem;
  color: var(--text-primary);
  font-family: var(--font-sans);
  text-align: center;
`;

export const SizeRow = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    gap: 0.5rem;
  }
`;

export const SizePill = styled.div`
  padding: 0.5rem 1rem;
  min-width: 3.5rem;
  text-align: center;
  color: ${(props) => (props.active ? "var(--bg-white, #fff)" : "var(--text-primary)")};
  background-color: ${(props) => (props.active ? "var(--color-black, #000)" : "transparent")};
  border: 1px solid ${(props) => (props.active ? "var(--color-black, #000)" : "var(--color-subtle-border, #e0e0e0)")};
  border-radius: 4px;
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--color-black, #000);
  }
`;

export const StockBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${(props) => (props.outOfStock ? "#b91c1c" : "#15803d")};

  &::before {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${(props) => (props.outOfStock ? "#b91c1c" : "#15803d")};
  }
`;

export const ActionBtn = styled.button`
  width: 100%;
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 600;
  font-family: var(--font-sans);
  letter-spacing: 0.05em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  background: ${(props) =>
    props.variant === "secondary"
      ? "var(--bg-secondary, #f5f5f5)"
      : "var(--color-black, #000)"};
  color: ${(props) =>
    props.variant === "secondary"
      ? "var(--text-primary, #000)"
      : "var(--bg-white, #fff)"};

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const LoginBtn = styled.button`
  width: 100%;
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  font-family: var(--font-sans);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  background-color: var(--color-black, #000);
  color: var(--bg-white, #fff);

  &:hover {
    background-color: var(--color-black-hover, #222);
  }
`;
