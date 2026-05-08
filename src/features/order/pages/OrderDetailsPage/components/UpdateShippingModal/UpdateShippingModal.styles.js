import styled from "@emotion/styled";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 576px) {
    flex-direction: row;
  }

  > div {
    flex: 1;
  }
`;
