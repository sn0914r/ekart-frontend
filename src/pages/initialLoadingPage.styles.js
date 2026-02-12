import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

/* --- Animations --- */
const bgShimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

/* --- Container --- */
export const LoadingContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  z-index: 9999;
  font-family:
    "Inter",
    system-ui,
    -apple-system,
    sans-serif;
  overflow: hidden;
  animation: ${fadeIn} 0.5s ease-out;
`;

/* --- Brand Shimmer Design --- */
export const BrandShimmerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ShimmerText = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  margin: 0;
  background: linear-gradient(90deg, #ffffff 20%, #666666 50%, #ffffff 80%);
  background-size: 200% auto;
  color: #ffffff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${bgShimmer} 3s linear infinite;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const SubText = styled.p`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #666666;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
