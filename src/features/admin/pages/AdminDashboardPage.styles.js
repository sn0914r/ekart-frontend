import styled from "@emotion/styled";

export const DashboardWrapper = styled.div`
  padding: 6rem 0;
  min-height: 80vh;
`;

export const DashboardTitle = styled.h1`
  font-family: var(--font-serif);
  font-size: 3.5rem;
  margin: 0 0 4rem 0;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  text-align: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary, #666666);
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s ease;
  margin-bottom: 1.5rem;

  &:hover {
    color: #000000;
  }
`;
