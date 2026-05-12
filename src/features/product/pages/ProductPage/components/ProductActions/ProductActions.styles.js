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
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    gap: 1rem;
  }
`;

export const SizePill = styled.div`
  padding: 0.25rem 0;
  color: var(--text-primary);
  border-bottom: 2px solid
    ${(props) => (props.active ? "var(--color-black, #000)" : "transparent")};
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: ${(props) => (props.active ? "600" : "400")};
  transition: all 0.1s ease;

  &:hover {
    border-bottom: 2px solid
      ${(props) => (props.active ? "var(--color-black, #000)" : "#ccc")};
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
