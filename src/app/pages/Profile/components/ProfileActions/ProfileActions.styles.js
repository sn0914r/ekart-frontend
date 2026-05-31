import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ActionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
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

export const LogoutBtn = styled.button`
  width: 100%;
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 1.2rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-top: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    margin-top: 3rem;
    padding: 1.5rem;
  }

  &:hover {
    background-color: #e04343;
    transform: translateY(-2px);
  }
`;
