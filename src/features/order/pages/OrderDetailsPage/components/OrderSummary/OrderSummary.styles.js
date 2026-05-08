import styled from "@emotion/styled";

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-family: var(--font-sans);
  font-size: 0.95rem;
  color: ${(props) => (props.isTotal ? "#000" : "var(--text-secondary)")};
  font-weight: ${(props) => (props.isTotal ? "700" : "400")};
  font-size: ${(props) => (props.isTotal ? "1.2rem" : "0.95rem")};
  border-top: ${(props) => (props.isTotal ? "1px solid #ddd" : "none")};
  padding-top: ${(props) => (props.isTotal ? "1rem" : "0")};
  margin-top: ${(props) => (props.isTotal ? "1rem" : "0")};
`;

export const SummaryLabel = styled.span`
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
`;

export const SummaryValue = styled.span`
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
`;
