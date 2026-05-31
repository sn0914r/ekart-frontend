import { ArrowLeft } from "lucide-react";
import { ROUTES } from "@constants/routes";
import * as S from "./NotFoundPage.styles";

const NotFound = ({
  errorCode = "404",
  title = "Page Not Found.",
  message = "This page is unavailable or may have been moved.",
  buttonLink = ROUTES.HOME,
  buttonText = "Back to the Shop",
}) => {
  return (
    <S.NotFoundWrapper>
      <S.ErrorCode>{errorCode}</S.ErrorCode>
      <S.Content>
        <S.Message>{title}</S.Message>
        <S.Description>{message}</S.Description>
        <S.BackBtn to={buttonLink}>
          <ArrowLeft size={16} /> {buttonText}
        </S.BackBtn>
      </S.Content>
    </S.NotFoundWrapper>
  );
};

export default NotFound;
