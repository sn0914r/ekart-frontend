import * as S from "./CatalogHeader.styles";

const CatalogHeader = ({
  title = "Our Products",
  subtitle = "Curated Selection",
}) => {
  return (
    <S.CatalogHeader>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <S.Title id="products">{title}</S.Title>
    </S.CatalogHeader>
  );
};

export default CatalogHeader;
