import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 3rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: ${(props) => (props.variant === "vertical" ? "column" : "row")};
    justify-content: ${(props) =>
      props.variant === "vertical" ? "center" : "space-between"};
    gap: ${(props) => (props.variant === "vertical" ? "1rem" : "0")};
  }
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
    color: var(--color-black);
  }
`;
