import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../sections/Navbar/Navbar";
import HeroSection from "../sections/HeroSection/HeroSection";
import CatalogSection from "../sections/CatalogSection/CatalogSection";
import Footer from "../../../../../shared/Footer/Footer";

const LandingPage = () => {
  const { hash } = useLocation();

  // INFO: Scroll to products section when hash is #products
  useEffect(() => {
    if (hash === "#products") {
      const element = document.getElementById("products");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  }, [hash]);

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
