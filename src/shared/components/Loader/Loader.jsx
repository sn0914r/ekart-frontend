import { LoaderWrapper, BrandText, Letter, Underline } from "./Loader.styles";

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
