import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingBag,
  User,
  Menu as MenuIcon,
  Heart,
} from "lucide-react";
import useAuthStore from "@app/store/authStore";

// Styled Components
import { Nav, Brand, NavbarAnchor, ActionBtn } from "./Navbar.styles";

// Sub-components
import NavSearch from "./NavSearch";
import NavSidebar from "./NavSidebar";
import { useCart } from "@features/cart/hooks/ui/useCart";

// Navigation Links Configuration
const NAV_LINKS = [
  { name: "Collections", path: "/" },
  { name: "About", path: "/about" },
  { name: "Bag", path: "/cart" },
  { name: "Wishlist", path: "/wishlist" },
];

const Navbar = () => {
  // 1. UI State
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 2. Auth & Cart State
  const user = useAuthStore((state) => state.user);
  const { totalCartItemsCount } = useCart();
  const cartCount = totalCartItemsCount();

  // 3. Scroll Effect: Change navbar background when scrolled
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 4. Handlers
  const handleOpenSearch = () => {
    setIsSearchOpen(true);
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const isScrolledFlag = isScrolled ? 1 : 0;

  return (
    <>
      {/* Search Overlay (Hidden by default) */}
      <NavSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Main Navbar */}
      <Nav isScrolled={isScrolled} isSearchOpen={isSearchOpen}>
        <div className="container d-flex align-items-center justify-content-between px-4 px-md-5">
          {/* Brand Logo */}
          <Brand to="/" isScrolled={isScrolledFlag}>
            eKart
          </Brand>

          <div className="d-flex align-items-center gap-5">
            {/* Desktop Menu */}
            <div className="d-none d-lg-flex gap-5">
              <NavbarAnchor 
                to="/#products" 
                isScrolled={isScrolledFlag}
                onClick={() => {
                  if (window.location.hash === "#products") {
                    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Collections
              </NavbarAnchor>
              <NavbarAnchor to="/about" isScrolled={isScrolledFlag}>
                About
              </NavbarAnchor>
            </div>

            {/* Desktop Actions */}
            <div className="d-none d-lg-flex align-items-center gap-4">
              <ActionBtn isScrolled={isScrolledFlag} onClick={handleOpenSearch}>
                <Search size={18} strokeWidth={1.5} />
                <span>Search</span>
              </ActionBtn>

              <ActionBtn isScrolled={isScrolledFlag} as={Link} to="/wishlist">
                <Heart size={18} strokeWidth={1.5} />
                <span>Wishlist</span>
              </ActionBtn>

              <ActionBtn isScrolled={isScrolledFlag} as={Link} to="/cart">
                <div style={{ position: "relative", display: "flex" }}>
                  <ShoppingBag size={18} strokeWidth={1.5} />
                   {cartCount > 0 && (
                    <span
                      style={{
                        position: "absolute",
                        top: "-8px",
                        right: "-8px",
                        fontSize: "9px",
                        fontWeight: "700",
                        backgroundColor: isScrolled ? "var(--text-primary)" : "#ffffff",
                        color: isScrolled ? "#ffffff" : "var(--text-primary)",
                        borderRadius: "50%",
                        width: "16px",
                        height: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {cartCount}
                    </span>
                  )}
                </div>
                <span>Bag</span>
              </ActionBtn>

              {!user ? (
                <ActionBtn
                  isScrolled={isScrolledFlag}
                  as={Link}
                  to="/auth/login"
                >
                  <User size={18} strokeWidth={1.5} />
                  <span>Login</span>
                </ActionBtn>
              ) : (
                <ActionBtn isScrolled={isScrolledFlag} as={Link} to="/profile">
                  <User size={18} strokeWidth={1.5} />
                  <span>Profile</span>
                </ActionBtn>
              )}
            </div>

            {/* Mobile Actions (Icons only) */}
            <div className="d-flex d-lg-none align-items-center gap-3">
              <button
                onClick={handleOpenSearch}
                style={{
                  background: "none",
                  border: "none",
                  color: isScrolled
                    ? "var(--text-primary)"
                    : "var(--text-on-dark)",
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
                  color: isScrolled
                    ? "var(--text-primary)"
                    : "var(--text-on-dark)",
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

      {/* Mobile Sidebar (Hidden by default) */}
      <NavSidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={NAV_LINKS}
        user={user}
      />
    </>
  );
};

export default Navbar;
