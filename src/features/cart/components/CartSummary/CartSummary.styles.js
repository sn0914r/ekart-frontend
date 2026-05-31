import styled from "@emotion/styled";

export const Summary = styled.div`
  background-color: var(--color-subtle-bg);
  padding: 3rem;
  height: fit-content;
  position: sticky;
  top: 2rem;
  z-index: 10;

  @media (max-width: 768px) {
    padding: 2rem;
    position: static;
  }
`;

export const SummaryTitle = styled.h2`
  font-family: var(--font-sans);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 700;
  margin-bottom: 2.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--color-black);
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: ${(props) =>
    props.bold ? "var(--text-primary)" : "var(--text-secondary)"};
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  border-top: ${(props) =>
    props.total ? "1px solid var(--color-border-light)" : "none"};
  padding-top: ${(props) => (props.total ? "1.5rem" : "0")};
  margin-top: ${(props) => (props.total ? "1.5rem" : "0")};
`;

export const CheckoutBtn = styled.button`
  width: 100%;
  background-color: var(--color-black);
  color: var(--bg-white);
  border: none;
  padding: 1.2rem;
  font-size: 0.75rem;
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

  &:hover {
    background-color: var(--color-black-hover);
    transform: translateY(-2px);
  }
`;
