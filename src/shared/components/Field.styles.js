import styled from "@emotion/styled";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 700;
  color: var(--text-primary);
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputIcon = styled.div`
  position: absolute;
  left: 0;
  color: ${(props) => (props.hasError ? "#ff4d4d" : "#cccccc")};
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid
    ${(props) => (props.hasError ? "#ff4d4d" : "#eeeeee")};
  padding: 0.75rem 0 0.75rem 2.5rem;
  font-family: var(--font-sans);
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;
  background: transparent;
  color: var(--text-primary);

  &:focus {
    border-bottom-color: #000000;
  }

  &::placeholder {
    color: #cccccc;
  }

  /* Remove autocomplete background color issues */
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: var(--text-primary);
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const ErrorMessage = styled.div`
  font-size: 0.75rem;
  color: #ff4d4d;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
