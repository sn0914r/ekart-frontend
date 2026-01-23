import styled from "@emotion/styled";

const FooterWrapper = styled.footer`
  background-color: #000000;
  color: #ffffff;
  padding: 8rem 0 4rem;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterBrand = styled.h2`
  font-family: var(--font-serif);
  font-size: 15vw;
  line-height: 0.8;
  margin-bottom: 4rem;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  font-weight: 700;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 20vw;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-bottom: 6rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const FooterLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 600;
  opacity: 0.6;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const Copyright = styled.div`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  opacity: 0.4;
  margin-top: 4rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterBrand>eKart</FooterBrand>

        <QuickLinks>
          <FooterLink href="#">Collections</FooterLink>
          <FooterLink href="#">Cart</FooterLink>
          <FooterLink href="#">About</FooterLink>
          {/* <FooterLink href="#">Shipping</FooterLink>
          <FooterLink href="#">Instagram</FooterLink> */}
        </QuickLinks>

        <Copyright>
          made by{" "}
          <a
            style={{ color: "white", textUnderlineOffset: "6px" }}
            href="https://github.com/sn0914r"
          >
            sn0914r
          </a>
        </Copyright>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
