import styled from "@emotion/styled";

export const FormTitle = styled.h2`
  font-family: var(--font-serif);
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--text-primary);
`;

export const FormCard = styled.div`
  /* border: 1px solid #eee; */
  padding: 2.5rem 1rem;
  /* border-radius: 8px; */
  background: #ffffff;
  /* box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03); */

  @media (max-width: 768px) {
    padding: 1.5rem;
    border: none;
    box-shadow: none;
  }
`;
