import styled from "@emotion/styled";

export const CheckLabel = styled.label`
  display: block;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  height: 100%;
`;
export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const CardWrapper = styled.div`
  border: 1px solid ${(props) => (props.isSelected ? "#000" : "#e0e0e0")};
  border-radius: 8px;
  padding: 1.5rem;
  height: 100%;
  position: relative;
  transition: all 0.2s ease;
  background-color: ${(props) => (props.isSelected ? "#fafafa" : "#fff")};
  box-shadow: ${(props) =>
    props.isSelected ? "0 4px 12px rgba(0, 0, 0, 0.05)" : "none"};

  &:hover {
    border-color: ${(props) => (props.isSelected ? "#000" : "#ccc")};
  }

  &::after {
    content: "✓";
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 24px;
    height: 24px;
    background: #000;
    color: #fff;
    border-radius: 50%;
    display: ${(props) => (props.isSelected ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
`;

export const Name = styled.h4`
  font-family: var(--font-serif);
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

export const AddressText = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 0.25rem;
`;
