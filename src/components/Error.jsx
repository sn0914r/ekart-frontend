import styled from "@emotion/styled";
import { AlertCircle, RefreshCw } from "lucide-react";

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 2rem;
  text-align: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const IconBox = styled.div`
  color: #ff4d4d;
  margin-bottom: 2rem;
  opacity: 0.8;
`;

const ErrorTitle = styled.h2`
  font-family: var(--font-serif);
  font-size: 2.5rem;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const ErrorText = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 3rem;
  max-width: 400px;
`;

const ActionBtn = styled.button`
  background: #000;
  color: #fff;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: #222;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

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

export default Error;
