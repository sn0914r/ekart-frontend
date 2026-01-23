import { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { Search, ShoppingBag, X } from "lucide-react";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: ${(props) => (props.isScrolled ? "1rem 0" : "2.2rem 0")};
  background-color: ${(props) =>
    props.isScrolled ? "rgba(255, 255, 255, 0.95)" : "transparent"};
  border-bottom: ${(props) =>
    props.isSearchOpen
      ? "1px solid #000"
      : props.isScrolled
        ? "var(--border-fine)"
        : "none"};
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  backdrop-filter: ${(props) => (props.isScrolled ? "blur(10px)" : "none")};
`;

const SearchOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.isOpen ? "140px" : "0")}; // Reduced height
  background-color: #ffffff;
  z-index: 1100;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #000;

  @media (max-width: 768px) {
    height: ${(props) =>
      props.isOpen ? "100px" : "0"}; // Even lower on mobile
  }
`;

const SearchContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    gap: 1rem;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  min-width: 0; // Prevent input from stretching container
  border: none;
  background: none;
  font-family: var(--font-serif);
  font-size: 4rem;
  font-weight: 400;
  outline: none;
  color: #000;
  letter-spacing: -0.02em;

  &::placeholder {
    color: #e0e0e0;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0; // Ensure button doesn't shrink
  color: #000;
  transition: transform 0.3s ease;
  &:hover {
    transform: rotate(90deg);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const Brand = styled.h1`
  font-family: var(--font-serif);
  font-size: 1.5rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0;
  cursor: pointer;
  color: ${(props) => (props.isScrolled ? "var(--text-primary)" : "#ffffff")};
  transition: color 0.4s ease;
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 1024px) {
    gap: 2rem;
  }
`;

const Menu = styled.div`
  display: flex;
  gap: 3rem;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavbarAnchor = styled.a`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${(props) => (props.isScrolled ? "var(--text-primary)" : "#ffffff")};
  text-decoration: none;
  opacity: 0.7;
  transition: all 0.3s ease;
  &:hover {
    opacity: 1;
    transform: translateY(-1px);
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1.25rem;
  }
`;

const ActionBtn = styled.button`
  background: none;
  border: none;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  cursor: pointer;
  padding: 0;
  color: ${(props) => (props.isScrolled ? "var(--text-primary)" : "#ffffff")};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition:
    color 0.4s ease,
    opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }

  .btn-text {
    text-decoration: none;
    color: inherit;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BagWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const BagCount = styled.span`
  font-size: 0.65rem;
  font-weight: 700;
  margin-left: -2px;
  position: relative;
  top: -6px;
  left: 3px;
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [iconSize, setIconSize] = useState(
    typeof window !== "undefined" && window.innerWidth < 768 ? 24 : 40,
  );
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => setIconSize(window.innerWidth < 768 ? 24 : 40);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current.focus(), 300);
    }
  }, [isSearchOpen]);

  return (
    <>
      <SearchOverlay isOpen={isSearchOpen}>
        <SearchContainer>
          <Search size={iconSize} strokeWidth={1} />
          <SearchInput
            ref={searchInputRef}
            placeholder="Search the archive..."
            type="text"
          />
          <CloseBtn onClick={() => setIsSearchOpen(false)}>
            <X size={iconSize} strokeWidth={1} />
          </CloseBtn>
        </SearchContainer>
      </SearchOverlay>

      <Nav isScrolled={isScrolled} isSearchOpen={isSearchOpen}>
        <Container>
          <Brand isScrolled={isScrolled}>ekart</Brand>

          <NavContent>
            <Menu>
              <NavbarAnchor isScrolled={isScrolled} href="#products">
                Collections
              </NavbarAnchor>
              {/* <NavbarAnchor isScrolled={isScrolled} href="#">
                Archive
              </NavbarAnchor> */}
              <NavbarAnchor isScrolled={isScrolled} href="#">
                About
              </NavbarAnchor>
            </Menu>

            <Actions>
              <ActionBtn
                isScrolled={isScrolled}
                onClick={() => setIsSearchOpen(true)}
              >
                <Search size={18} strokeWidth={1.5} />
                <span className="btn-text">Search</span>
              </ActionBtn>

              <ActionBtn isScrolled={isScrolled}>
                <BagWrapper>
                  <ShoppingBag size={18} strokeWidth={1.5} />
                  <BagCount>0</BagCount>
                </BagWrapper>
                <Link className="btn-text" to="/cart">
                  Bag
                </Link>
              </ActionBtn>
            </Actions>
          </NavContent>
        </Container>
      </Nav>
    </>
  );
};

export default Navbar;
