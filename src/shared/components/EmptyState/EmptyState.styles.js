import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const EmptyStateWrapper = styled.div`
  min-height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 0;
  overflow: hidden;
`;

export const ErrorCode = styled.h1`
  font-family: var(--font-serif);
  font-weight: 800;
  font-size: 28vw;
  line-height: 0.8;
  margin: 0;
  margin-bottom: -4vw;
  letter-spacing: -0.05em;
  color: #e5e5e5;
  opacity: 0.85;
  z-index: 1;
  user-select: none;

  @media (min-width: 768px) {
    font-size: 14vw;
    margin-bottom: -2vw;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const Message = styled.h2`
  font-family: var(--font-serif);
  font-size: 2.5rem;
  letter-spacing: -0.02em;
  margin: 0;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  opacity: 0.6;
  max-width: 400px;
  line-height: 1.6;
`;

export const BackBtn = styled(Link)`
  background-color: #000;
  color: #fff;
  text-decoration: none;
  padding: 1.2rem 2rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #222;
    transform: translateY(-2px);
  }
`;
