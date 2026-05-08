import Navbar from "../sections/Navbar/Navbar";
import HeroSection from "../sections/HeroSection/HeroSection";
import CatalogSection from "../sections/CatalogSection/CatalogSection";
import Footer from "../../../../../shared/Footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CatalogSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
