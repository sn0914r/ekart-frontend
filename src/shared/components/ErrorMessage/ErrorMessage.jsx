import { useNavigate } from "react-router-dom";
import * as S from "./ErrorMessage.styles";

const ErrorMessage = ({ error, onRetry, heading, children }) => {
  const navigate = useNavigate();

  let title = "Server error";
  let message = error?.message || "Something went wrong. Please try again later.";
  let actionLabel = onRetry ? "Retry" : null;
  let onAction = onRetry;

  if (error?.code === "UNAUTHORIZED_ERROR") {
    title = "Session Expired";
    message = "Your session has expired. Please sign in again.";
    actionLabel = "Go to Login";
    onAction = () => navigate("/auth/login");
  } else if (error?.code === "NETWORK_ERROR" || error?.message === "Failed to fetch") {
    title = "Server Error";
    message = "Something went wrong while loading this page.";
    actionLabel = "Retry";
    onAction = onRetry || (() => window.location.reload());
  }

  return (
    <S.ErrorContainer>
      <S.Title>{heading || title}</S.Title>
      <S.ErrorText>{children || message}</S.ErrorText>
      {actionLabel && onAction && (
        <S.ActionBtn onClick={onAction}>
          {actionLabel}
        </S.ActionBtn>
      )}
    </S.ErrorContainer>
  );
};

export default ErrorMessage;
