import styled from "@emotion/styled";

export const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  position: relative;
`;

export const FormTitle = styled.h2`
  font-family: var(--font-serif);
  font-size: 2rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: var(--text-primary);
`;

export const FormField = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid
    ${(props) => (props.hasError ? "#ff4d4d" : "#eeeeee")};
  padding: 0.75rem 0;
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
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

export const Checkbox = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
  accent-color: #000000;
`;

export const CheckboxLabel = styled.label`
  font-family: var(--font-sans);
  font-size: 0.875rem;
  color: var(--text-primary);
  cursor: pointer;
  user-select: none;
`;

export const FileInputWrapper = styled.div`
  border: 2px dashed #cccccc;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #fafafa;

  &:hover {
    border-color: #000000;
    background-color: #f5f5f5;
  }
`;

export const FileInputLabel = styled.label`
  font-family: var(--font-sans);
  font-size: 0.875rem;
  color: var(--text-secondary);
  cursor: pointer;
  display: block;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const ImagePreviewContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
`;

export const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
  border: 1px solid #eeeeee;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

export const CancelButton = styled.button`
  flex: 1;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #000000;
  padding: 1.25rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.span`
  font-size: 0.75rem;
  color: #ff4d4d;
  display: block;
  margin-top: 0.5rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  color: var(--text-secondary, #666666);
  transition: color 0.2s ease;

  &:hover {
    color: #000000;
  }
`;
