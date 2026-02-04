import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Header = styled.div`
  margin-bottom: 3.5rem;
  text-align: left;
  width: 100%;
`;

export const Title = styled.h1`
  font-family: var(--font-serif);
  font-size: 3rem;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

export const Subtitle = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

export const BottomLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 600;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #000000;
  }
`;
