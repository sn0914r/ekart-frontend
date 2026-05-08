import styled from "@emotion/styled";

export const CatalogHeader = styled.div`
  margin: 3rem 0;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${(props) =>
    props.isWhite ? "var(--text-on-dark)" : "var(--text-primary)"};
`;

export const Title = styled.h2`
  font-size: 3rem;
`;
