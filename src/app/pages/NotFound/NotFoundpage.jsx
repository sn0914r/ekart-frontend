import { ArrowLeft } from "lucide-react";
import {
  NotFoundWrapper,
  ErrorCode,
  Content,
  Message,
  Description,
  BackBtn,
} from "./NotFoundPage.styles";

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <ErrorCode>404</ErrorCode>
      <Content>
        <Message>Page Not Found.</Message>
        <Description>
          The piece you are looking for has been archived or removed from the
          current collection.
        </Description>
        <BackBtn to="/">
          <ArrowLeft size={16} /> Back to the Shop
        </BackBtn>
      </Content>
    </NotFoundWrapper>
  );
};

export default NotFound;
