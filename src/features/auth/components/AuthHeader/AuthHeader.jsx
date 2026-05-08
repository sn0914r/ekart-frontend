import * as S from "./AuthHeader.styles";

const AuthHeader = ({ title, subtitle }) => {
  return (
    <S.Header>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Header>
  );
};

export default AuthHeader;
