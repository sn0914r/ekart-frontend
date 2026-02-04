import { forwardRef } from "react";
import { AlertTriangle } from "lucide-react";
import {
  FormGroup,
  Label,
  InputWrapper,
  InputIcon,
  StyledInput,
  ErrorMessage,
} from "./Field.styles";

const AuthInput = forwardRef(({ label, icon: Icon, error, ...props }, ref) => {
  return (
    <FormGroup>
      {label && <Label>{label}</Label>}
      <InputWrapper>
        {Icon && (
          <InputIcon hasError={!!error}>
            <Icon size={18} strokeWidth={1.5} />
          </InputIcon>
        )}
        <StyledInput ref={ref} hasError={!!error} {...props} />
      </InputWrapper>
      {error && (
        <ErrorMessage>
          <AlertTriangle size={12} /> {error.message}
        </ErrorMessage>
      )}
    </FormGroup>
  );
});

export default AuthInput;
