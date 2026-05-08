import styled from "@emotion/styled";

export const SectionTitle = styled.h2`
  font-family: var(--font-serif);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: -0.01em;
`;

export const AddressGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;
