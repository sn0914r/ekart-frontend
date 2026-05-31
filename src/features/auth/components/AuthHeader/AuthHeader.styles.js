import styled from "@emotion/styled";

export const Header = styled.div`
  margin-bottom: 2rem;
  text-align: left;
  width: 100%;

  @media (min-width: 768px) {
    margin-bottom: 3.5rem;
  }
`;

export const Title = styled.h1`
  font-family: var(--font-serif);
  font-size: 2rem;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  color: var(--text-primary);

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;
