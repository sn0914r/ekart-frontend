import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  padding: 4rem 0;
  min-height: 80vh;
  min-height: 80dvh;
  background-color: var(--bg-primary, #ffffff);

  @media (max-width: 991px) {
    padding: 2rem 0;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const BackLink = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary, #666666);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  margin-bottom: 2rem;
  transition: all 0.2s ease;

  &:hover {
    color: var(--color-black, #000);
    transform: translateX(-4px);
  }
`;
