import { StyledButton } from "./Button.styles";

const AuthButton = ({ children, disabled, ...rest }) => {
  return (
    <StyledButton disabled={disabled} {...rest}>
      {children}
    </StyledButton>
  );
};

export default AuthButton;
