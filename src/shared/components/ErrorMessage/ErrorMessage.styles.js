import styled from "@emotion/styled";

export const ErrorContainer = styled.div`
  text-align: center;
  padding: 5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

export const Title = styled.h2`
  font-family: var(--font-serif);
  font-size: 2rem;
  letter-spacing: -0.02em;
  margin: 0;
  text-transform: uppercase;
  color: var(--text-primary);
`;

export const ErrorText = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 400px;
  margin: 0 auto;
`;

export const ActionBtn = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #222;
  }
`;
