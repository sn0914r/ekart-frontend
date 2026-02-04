import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const FooterWrapper = styled.footer`
  background-color: #000000;
  color: #ffffff;
  padding: 8rem 0 4rem;
  text-align: center;
  margin-top: 8rem;
`;

// Removed 'Container' and 'QuickLinks' as they are replaced by Bootstrap classes

export const FooterBrand = styled.h2`
  font-family: var(--font-serif);
  font-size: 15vw;
  line-height: 0.8;
  margin-bottom: 4rem;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  font-weight: 700;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 20vw;
  }
`;

export const FooterLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 600;
  opacity: 0.6;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const Github = styled.div`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  opacity: 0.4;
  margin-top: 4rem;
`;
