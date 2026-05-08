import styled from "@emotion/styled";
import heroImg from "@assets/hero-img.jpeg";

export const Hero = styled.section`
  height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url(${heroImg});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  text-align: center;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      transparent 0%,
      var(--color-dark-overlay-heavy) 100%
    );
    pointer-events: none;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 900px;
  padding: 0 2rem;
`;

export const Subtitle = styled.p`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${(props) => (props.isWhite ? "#ffffff" : "var(--text-primary)")};
`;

export const Title = styled.h1`
  font-size: 6rem;
  max-width: 700px;
  line-height: 1.1;
  margin-bottom: 2rem;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 2.5rem; // Significantly smaller for mobile
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }
`;

export const CTA = styled.a`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #ffffff;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.6;
  }
`;
