import { Hero, HeroContent, Subtitle, Title, CTA } from "./HeroSection.styles";
const HeroSection = () => (
  <Hero>
    <HeroContent>
      <Subtitle isWhite={true}>New Season — 2026</Subtitle>
      <Title>
        The
        <br />
        New
        <br />
        Standard.
      </Title>
      <CTA href="#products">Explore Collection</CTA>
    </HeroContent>
  </Hero>
);

export default HeroSection;
