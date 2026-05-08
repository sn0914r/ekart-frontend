import * as S from "./AuthFooter.styles";

const AuthFooter = ({ children, variant = "horizontal" }) => {
  return (
    <S.FooterContainer variant={variant}>
      {children}
    </S.FooterContainer>
  );
};

AuthFooter.Link = S.StyledLink;

export default AuthFooter;
