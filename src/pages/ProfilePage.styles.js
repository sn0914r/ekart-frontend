import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ProfileWrapper = styled.section`
  min-height: 100vh;
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
  padding: 8rem 2rem;
`;

export const ProfileCard = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const AvatarCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f9f9f9;
  border: 1px solid #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 3rem;
  color: #000;
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
  padding: 1.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-top: 3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e04343;
    transform: translateY(-2px);
  }
`;

export const BackButton = styled(Link)`
  display: inline-flex;
  position: absolute;
  top: 3rem;
  left: 2rem;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  transition: color 0.2s ease;
  margin-bottom: 2rem;

  &:hover {
    color: var(--text-primary);
  }
`;
