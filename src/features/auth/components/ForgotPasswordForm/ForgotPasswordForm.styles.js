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

export const InlineStatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const StatusBanner = styled.div`
  background-color: var(--color-subtle-bg);
  border: 1px solid var(--color-subtle-border);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const BannerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
`;

export const BannerTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
  letter-spacing: var(--letter-spacing-tight);
`;

export const BannerMessage = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin: 0;

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
`;

export const CountdownRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--color-border-light);
  font-size: 0.8rem;
  color: var(--text-secondary);
`;

export const PulseDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--color-black);
  display: inline-block;
  opacity: 0.8;
`;

export const ActionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const LinksRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  font-size: 0.85rem;
`;

export const TextLinkButton = styled.button`
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 0.85rem;
  font-family: inherit;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: color 0.2s ease;

  &:hover {
    color: var(--text-primary);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const DividerDot = styled.span`
  color: var(--color-muted);
  user-select: none;
`;
