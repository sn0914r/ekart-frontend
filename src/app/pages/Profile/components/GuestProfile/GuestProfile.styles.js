import styled from "@emotion/styled";

export const IconWrapper = styled.div`
  margin-bottom: 2rem;
  color: var(--color-black, #000);
`;

export const Title = styled.h1`
  font-family: var(--font-serif);
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--text-primary, #000);
  font-weight: 400;
  letter-spacing: -0.02em;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary, #666);
  margin-bottom: 3rem;
  font-family: var(--font-sans);
`;

export const ActionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ActionBtn = styled.button`
  width: 100%;
  padding: 1.2rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 700;
  font-family: var(--font-sans);
  letter-spacing: 0.1em;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  background: ${(props) =>
    props.variant === "secondary"
      ? "var(--bg-secondary, #f5f5f5)"
      : "var(--color-black, #000)"};
  color: ${(props) =>
    props.variant === "secondary"
      ? "var(--text-primary, #000)"
      : "var(--bg-white, #fff)"};

  &:hover {
    opacity: 0.85;
  }
`;
