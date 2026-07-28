import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const PageWrapper = styled.div`
  padding: 4rem 0;
  min-height: 80vh;
  background-color: var(--bg-primary);
`;

export const Title = styled.h1`
  font-family: var(--font-serif);
  font-weight: 400;
  letter-spacing: var(--letter-spacing-loose);
  text-transform: uppercase;
  color: var(--text-primary);
  margin-bottom: 3rem;
  font-size: 1.5rem;
`;

export const MethodCard = styled.div`
  background: var(--bg-primary);
  border: var(--border-fine);
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  height: 100%;

  &:hover {
    background: var(--color-subtle-bg);
  }

  ${({ selected }) => selected && `
    border: var(--border-dark);
    background: var(--color-subtle-bg);
  `}
`;

export const MethodIconWrapper = styled.div`
  color: var(--color-black);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-subtle-bg);
  /* Component-level centering (not layouting) */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MethodName = styled.h3`
  margin: 0;
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-primary);
`;

export const MethodDescription = styled.p`
  margin: 4px 0 0;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  color: var(--text-secondary);
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const WaitingSpinner = styled.div`
  width: 56px;
  height: 56px;
  border: 4px solid var(--border-color);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: ${spin} 0.9s linear infinite;
  margin: 0 auto;
`;
