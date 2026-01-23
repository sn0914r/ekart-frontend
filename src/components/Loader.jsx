import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

// --- Animations ---

const reveal = keyframes`
  0% { 
    opacity: 0; 
    transform: translateY(10px) skewY(2deg);
    filter: blur(4px);
  }
  100% { 
    opacity: 1; 
    transform: translateY(0) skewY(0);
    filter: blur(0);
  }
`;

const linePulse = keyframes`
  0% { transform: scaleX(0); transform-origin: left; }
  50% { transform: scaleX(1); transform-origin: left; }
  50.1% { transform: scaleX(1); transform-origin: right; }
  100% { transform: scaleX(0); transform-origin: right; }
`;

// --- Styled Components ---

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  items-align: center;
  justify-content: center;
  background-color: transparent;
  padding: 4rem 0;
  width: 100%;
`;

const BrandText = styled.h2`
  font-family: var(--font-serif);
  font-size: clamp(2rem, 8vw, 6rem);
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const Letter = styled.span`
  display: inline-block;
  animation: ${reveal} 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards infinite
    alternate;
  animation-delay: ${(props) => props.delay}s;
`;

const Underline = styled.div`
  width: 100%;
  height: 1px;
  background-color: #000000;
  margin: 0 auto;
  animation: ${linePulse} 1.5s infinite ease-in-out;
`;

/**
 * Sophisticated Minimalist Loader
 * Staggered character reveal with a fine pulse line.
 */
const Loader = () => {
  const text = "LOADING ...";

  return (
    <LoaderWrapper>
      <BrandText>
        {text.split("").map((char, i) => (
          <Letter key={i} delay={i * 0.1}>
            {char}
          </Letter>
        ))}
      </BrandText>
      <Underline />
    </LoaderWrapper>
  );
};

export default Loader;
