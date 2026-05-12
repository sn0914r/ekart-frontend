import { ArrowLeft } from "lucide-react";
import { ROUTES } from "@constants/routes";
import * as S from "./NotFoundPage.styles";

const NotFound = () => {
  return (
    <S.NotFoundWrapper>
      <S.ErrorCode>404</S.ErrorCode>
      <S.Content>
        <S.Message>Page Not Found.</S.Message>
        <S.Description>
          The piece you are looking for has been archived or removed from the
          current collection.
        </S.Description>
        <S.BackBtn to={ROUTES.HOME}>
          <ArrowLeft size={16} /> Back to the Shop
        </S.BackBtn>
      </S.Content>
    </S.NotFoundWrapper>
  );
};

export default NotFound;
