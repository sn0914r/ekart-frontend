import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ProfileWrapper = styled.section`
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

export const ContentArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  margin-top: auto;
  margin-bottom: auto;

  @media (min-width: 768px) {
    padding: 8rem 2rem;
  }
`;

export const ProfileCard = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: var(--text-primary);
  }
`;
