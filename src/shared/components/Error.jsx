import { AlertCircle, RefreshCw } from "lucide-react";
import {
  ErrorWrapper,
  IconBox,
  ErrorTitle,
  ErrorText,
  ActionBtn,
} from "./Error.styles";

const Error = ({ message, onRetry }) => {
  return (
    <ErrorWrapper>
      <IconBox>
        <AlertCircle size={48} strokeWidth={1} />
      </IconBox>
      <ErrorTitle>Encountered an issue</ErrorTitle>
      <ErrorText>
        {message ||
          "We couldn't load the items at this time. Please check your connection and try again."}
      </ErrorText>
      {onRetry && (
        <ActionBtn onClick={onRetry}>
          <RefreshCw size={14} />
          Retry Request
        </ActionBtn>
      )}
    </ErrorWrapper>
  );
};

Error.defaultProps = {
  message: null,
  onRetry: null,
};

export default Error;
