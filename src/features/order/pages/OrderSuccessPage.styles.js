import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const checkDraw = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

export const SuccessWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background-color: #ffffff;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`;

export const SuccessCard = styled.div`
  max-width: 600px;
  width: calc(100% - 2rem);
  margin: 0 auto;
  text-align: center;
  padding: 2rem 1.5rem;
  border-radius: 8px;
  background: #fff;
  animation: ${fadeInUp} 0.6s ease-out;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
    width: 100%;
  }
`;

export const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  border-radius: 50%;
  background-color: #d1fae5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #065f46;
  animation:
    ${scaleIn} 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) both,
    ${bounce} 2s ease-in-out 0.6s infinite;
`;

export const AnimatedIcon = styled.svg`
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: ${checkDraw} 0.8s ease-out 0.3s forwards;
`;

export const SuccessTitle = styled.h1`
  font-family: var(--font-serif);
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

export const SuccessMessage = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

export const OrderDetails = styled.div`
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 2rem;
  text-align: left;
  animation: ${fadeInUp} 0.6s ease-out 0.4s both;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

export const DetailLabel = styled.span`
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
`;

export const DetailValue = styled.span`
  font-family: var(--font-sans);
  font-size: 0.9rem;
  color: var(--text-primary);
  font-weight: 500;
  word-break: break-all;
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  animation: ${fadeInUp} 0.6s ease-out 0.6s both;
`;
