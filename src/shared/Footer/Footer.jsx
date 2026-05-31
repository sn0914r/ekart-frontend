import {
  FooterWrapper,
  FooterBrand,
  FooterLink,
  Github,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        {/* Brand */}
        <FooterBrand>eKart</FooterBrand>

        {/* Quick Links */}
        <div className="d-flex flex-column flex-md-row justify-content-center gap-4 gap-md-5 py-4 border-top border-bottom border-white border-opacity-10 mb-5">
          <FooterLink
            to="/#products"
            onClick={() => {
              if (window.location.hash === "#products") {
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Collections
          </FooterLink>
          <FooterLink to="/cart">Cart</FooterLink>
          <FooterLink to="/wishlist">Wishlist</FooterLink>
        </div>

        <Github>
          made by{" "}
          <a
            style={{ color: "white", textUnderlineOffset: "6px" }}
            href="https://github.com/sn0914r"
          >
            sn0914r
          </a>
        </Github>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
