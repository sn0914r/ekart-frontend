import Footer from "../components/Footer";
import HeroSection from "../sections/HeroSection";
import Navbar from "../components/Navbar";
import ProductsSection from "../sections/ProductsSection";
import { Catalog, CatalogHeader, Subtitle } from "./LandingPage.styles";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Catalog>
        <CatalogHeader>
          <Subtitle>Curated Selection</Subtitle>
          <h2 style={{ fontSize: "3rem" }} id="products">
            Our Products
          </h2>
        </CatalogHeader>
      </Catalog>
      <ProductsSection className="col-lg-3 col-md-6" />
      <Footer />
    </div>
  );
};

export default LandingPage;
