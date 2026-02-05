import styled from "@emotion/styled";

export const SectionTitle = styled.h2`
  font-family: var(--font-serif);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
`;

export const OrderSummaryCardWrapper = styled.div`
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 4px;
  border: 1px solid #eee;
`;

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-family: var(--font-sans);
  font-size: 0.95rem;
  color: ${(props) => (props.total ? "#000" : "var(--text-secondary)")};
  font-weight: ${(props) => (props.total ? "700" : "400")};
  font-size: ${(props) => (props.total ? "1.2rem" : "0.95rem")};
  border-top: ${(props) => (props.total ? "1px solid #ddd" : "none")};
  padding-top: ${(props) => (props.total ? "1rem" : "0")};
  margin-top: ${(props) => (props.total ? "1rem" : "0")};
`;
