import { useState, useEffect, useRef } from "react";
import { Search, ShoppingBag, User, X, Menu as MenuIcon } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Nav,
  SearchOverlay,
  SearchInput,
  CloseBtn,
  Brand,
  NavbarAnchor,
  ActionBtn,
  Sidebar,
  SidebarHeader,
  SidebarBrand,
  SidebarLink,
} from "./Navbar.styles";
import useUpdateSearchParams from "../useUpdateSeachParams";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchInputRef = useRef(null);

  const [_, setParams] = useSearchParams();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current.focus(), 300);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  const openSearchBar = () => {
    setIsSearchOpen(true);
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  };

  const updateSearchParams = useUpdateSearchParams(1000);

  /**
   * @desc navigation links for mobile
   */
  const navLinks = [
    { name: "Collections", path: "/" },
    { name: "About", path: "/about" },
    { name: "Bag", path: "/cart" },
    { name: "Login", path: "/login" },
  ];

  /**
   * @desc function to handle search input change. On change of search input value, it updates the search params in URL
   * @param {string} value
   */

  return (
    <>
      <SearchOverlay
        isOpen={isSearchOpen}
        className="d-flex align-items-center justify-content-center"
      >
        <div className="container d-flex align-items-center justify-content-center gap-3 gap-md-5">
          {/* Using d-none d-md-block logic for responsive display */}
          <div className="d-none d-md-block">
            <Search size={32} strokeWidth={1} />
          </div>
          <SearchInput
            ref={searchInputRef}
            placeholder="Search the archive..."
            type="text"
            onChange={(e) => updateSearchParams({search: e.target.value})}
          />
          <CloseBtn onClick={() => setIsSearchOpen(false)}>
            <X size={32} strokeWidth={1} />
          </CloseBtn>
        </div>
      </SearchOverlay>

      <Nav isScrolled={isScrolled} isSearchOpen={isSearchOpen}>
        <div className="container d-flex align-items-center justify-content-between px-4 px-md-5">
          <Brand to="/" isScrolled={isScrolled ? 1 : 0}>
            eKart
          </Brand>

          <div className="d-flex align-items-center gap-5">
            {/* Desktop Menu */}
            <div className="d-none d-lg-flex gap-5">
              <NavbarAnchor to="/" isScrolled={isScrolled ? 1 : 0}>
                Collections
              </NavbarAnchor>
              <NavbarAnchor to="/about" isScrolled={isScrolled ? 1 : 0}>
                About
              </NavbarAnchor>
            </div>

            {/* Desktop Actions */}
            <div className="d-none d-lg-flex align-items-center gap-4">
              <ActionBtn
                isScrolled={isScrolled ? 1 : 0}
                onClick={openSearchBar}
              >
                <Search size={18} strokeWidth={1.5} />
                <span>Search</span>
              </ActionBtn>

              <ActionBtn isScrolled={isScrolled ? 1 : 0} as={Link} to="/cart">
                <div style={{ position: "relative", display: "flex" }}>
                  <ShoppingBag size={18} strokeWidth={1.5} />
                  <span
                    style={{
                      position: "absolute",
                      top: "-6px",
                      right: "-6px",
                      fontSize: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    0
                  </span>
                </div>
                <span>Bag</span>
              </ActionBtn>

              <ActionBtn isScrolled={isScrolled ? 1 : 0} as={Link} to="/login">
                <User size={18} strokeWidth={1.5} />
                <span>Login</span>
              </ActionBtn>
            </div>

            {/* Mobile Actions */}
            <div className="d-flex d-lg-none align-items-center gap-3">
              {/* Using inline styles or styled components for color logic because Bootstrap utility classes don't easily handle the 'mix-blend-mode' logic we have in styled components */}
              <button
                onClick={openSearchBar}
                style={{
                  background: "none",
                  border: "none",
                  color: isScrolled ? "var(--text-primary)" : "#ffffff",
                  mixBlendMode: isScrolled ? "normal" : "difference",
                  padding: 0,
                }}
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                style={{
                  background: "none",
                  border: "none",
                  color: isScrolled ? "var(--text-primary)" : "#ffffff",
                  mixBlendMode: isScrolled ? "normal" : "difference",
                  padding: 0,
                }}
              >
                <MenuIcon size={24} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </Nav>

      <Sidebar isOpen={isMobileMenuOpen}>
        <SidebarHeader>
          <SidebarBrand>eKart</SidebarBrand>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ background: "none", border: "none" }}
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </SidebarHeader>
        {navLinks.map((link) => (
          <SidebarLink
            key={link.name}
            to={link.path}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </SidebarLink>
        ))}
      </Sidebar>
    </>
  );
};

export default Navbar;
