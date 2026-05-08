import styled from "@emotion/styled";

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
