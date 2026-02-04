import styled from "@emotion/styled";

export const StyledButton = styled.button`
  background-color: #000000;
  color: #ffffff;
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
    background-color: #222222;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    transform: none;
  }
`;
