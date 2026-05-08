import * as S from "./HeroSection.styles";

const HeroSection = () => (
  <S.Hero>
    <S.HeroContent>
      <S.Subtitle isWhite={true}>New Season — 2026</S.Subtitle>
      <S.Title>
        The
        <br />
        New
        <br />
        Standard.
      </S.Title>
      <S.CTA href="#products">Explore Collection</S.CTA>
    </S.HeroContent>
  </S.Hero>
);

export default HeroSection;
