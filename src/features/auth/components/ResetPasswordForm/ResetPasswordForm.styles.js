import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const ErrorMessage = styled.div`
  color: var(--color-error);
  font-size: 0.85rem;
`;

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  gap: 1.75rem;
`;

export const IconBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  color: var(--text-primary);
  background-color: var(--bg-primary);
`;

export const DescriptionText = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
  max-width: 380px;

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`;

export const CountdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  max-width: 340px;
`;

export const CountdownLabel = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-loose);
  color: var(--text-secondary);
`;

export const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--color-border-light);
  overflow: hidden;
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  background-color: var(--color-black);
  transition: width 1s linear;
  width: ${({ percent }) => `${percent}%`};
`;

export const ActionGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;
