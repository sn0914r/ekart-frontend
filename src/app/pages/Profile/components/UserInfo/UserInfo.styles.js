import styled from "@emotion/styled";

export const AvatarCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f9f9f9;
  border: 1px solid #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  color: #000;

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
    margin: 0 auto 3rem;
  }
`;

export const UserName = styled.h1`
  font-family: var(--font-serif);
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const UserEmail = styled.p`
  font-size: 0.85rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    margin-bottom: 4rem;
  }
`;
