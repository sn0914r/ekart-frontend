import styled from "@emotion/styled";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import heroImg from "../assets/hero-img.jpeg";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { productsApi } from "../api/products.api";
import Error from "../components/Error";

const Hero = styled.section`
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
      rgba(0, 0, 0, 0.4) 100%
    );
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 900px;
  padding: 0 2rem;
`;

const Subtitle = styled.p`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${(props) => (props.isWhite ? "#ffffff" : "var(--text-primary)")};
`;

const Title = styled.h1`
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

const CTA = styled.a`
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

const Catalog = styled.section`
  padding: 10rem 0;
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 3rem;
  padding-right: 3rem;
`;

const CatalogHeader = styled.div`
  margin-bottom: 6rem;
  text-align: center;
`;

const Landing = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await productsApi.getAll();
        setProducts(data);
      } catch (err) {
        setError(err.message || "An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  /**
   * Retries the fetch products request
   */
  const onRetry = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await productsApi.getAll();
      setProducts(data);
    } catch (err) {
      setError(err.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>
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

        <Catalog>
          <CatalogHeader>
            <Subtitle>Curated Selection</Subtitle>
            <h2 style={{ fontSize: "3rem" }} id="products">
              Our Products
            </h2>
          </CatalogHeader>
          <div className="row g-5">
            {error && !loading && <Error message={error} onRetry={onRetry} />}
            {loading && <Loader />}
            {!loading &&
              !error &&
              products.map((p) => (
                <div key={p.id} className="col-lg-3 col-md-6">
                  <ProductCard {...p} />
                </div>
              ))}
          </div>
        </Catalog>
      </main>
      <Footer />
    </>
  );
};

export default Landing;
