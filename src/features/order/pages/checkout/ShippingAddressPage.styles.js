import styled from "@emotion/styled";

export const FormTitle = styled.h2`
  font-family: var(--font-serif);
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--text-primary);
`;

export const FormCard = styled.div`
  padding: 2.5rem 1rem;
  background: #ffffff;
  @media (max-width: 768px) {
    padding: 1.5rem;
    border: none;
    box-shadow: none;
  }
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
