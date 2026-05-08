import styled from "@emotion/styled";

export const FormCard = styled.div`
  max-width: 600px;
  margin: 4rem auto;
  background: white;
  padding: 3rem;
  border-radius: 4px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    margin: 0;
    padding: 2rem 1.5rem;
    min-height: 100vh;
    border-radius: 0;
  }
`;
