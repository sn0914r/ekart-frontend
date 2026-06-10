import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const EmptyState = styled.div`
  text-align: center;
  padding: 5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  position: relative;
  min-height: 50vh;
`;

export const BackLink = styled(Link)`
  position: absolute;
  top: 1rem;
  left: 0;
  text-decoration: none;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: var(--text-primary);
  }
`;

export const PageTitle = styled.h1`
  font-family: var(--font-serif);
  font-size: 2.5rem;
  letter-spacing: -0.02em;
  margin: 0;
  text-transform: uppercase;
  color: var(--text-primary);
`;

export const Message = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 400px;
  margin: 0 auto;
`;

export const LoginBtn = styled.button`
  background-color: #000;
  color: #fff;
  border: 1px solid #000;
  padding: 1rem 2rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #222;
    border-color: #222;
  }
`;
