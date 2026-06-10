import { useNavigate } from "react-router-dom";
import * as S from "./ErrorMessage.styles";

const ErrorMessage = ({ error, onRetry, heading, children, actionLabel: customActionLabel, onAction: customOnAction }) => {
  const navigate = useNavigate();

  let title = "Server error";
  let message = error?.message || "Something went wrong. Please try again later.";
  let actionLabel = customActionLabel || (onRetry ? "Retry" : null);
  let onAction = customOnAction || onRetry;

  if (error?.code === "UNAUTHORIZED_ERROR") {
    title = "Session Expired";
    message = "Your session has expired. Please sign in again.";
    actionLabel = customActionLabel || "Go to Login";
    onAction = customOnAction || (() => navigate("/auth/login"));
  } else if (error?.code === "NETWORK_ERROR" || error?.message === "Failed to fetch") {
    title = "Server Error";
    message = "Something went wrong while loading this page.";
    actionLabel = customActionLabel || "Retry";
    onAction = customOnAction || onRetry || (() => window.location.reload());
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
