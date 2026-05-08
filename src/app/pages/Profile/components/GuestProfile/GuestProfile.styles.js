import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ProfileCard = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const UserName = styled.h1`
  font-family: var(--font-serif);
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
`;

export const UserEmail = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 4rem;
`;

export const ProfileLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background-color: #fcfcfc;
  border: 1px solid #eeeeee;
  text-decoration: none;
  color: #000;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`;
