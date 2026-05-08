import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const BackLink = styled(Link)`
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
