import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
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

export const SearchOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => (props.isOpen ? "140px" : "0")};
  background-color: var(--bg-primary);
  z-index: 1100;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  border-bottom: 1px solid var(--color-black);

  @media (max-width: 768px) {
    height: ${(props) => (props.isOpen ? "100px" : "0")};
  }
`;

// Keeping for specific search input styling
export const SearchInput = styled.input`
  flex: 1;
  min-width: 0;
  border: none;
  background: none;
  font-family: var(--font-serif);
  font-size: 4rem;
  font-weight: 400;
  outline: none;
  color: var(--text-primary);
  letter-spacing: -0.02em;

  &::placeholder {
    color: #e0e0e0;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const CloseBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--text-primary);
  transition: transform 0.3s ease;
  &:hover {
    transform: rotate(90deg);
  }
`;

// Filter props for custom components
export const Brand = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isScrolled",
})`
  font-family: var(--font-serif);
  font-size: 1.5rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0;
  cursor: pointer;
  color: ${(props) => (props.isScrolled ? "var(--text-primary)" : "#ffffff")};
  mix-blend-mode: ${(props) => (props.isScrolled ? "normal" : "difference")};
  text-decoration: none;
  transition: color 0.4s ease;
  z-index: 10;
`;

export const NavbarAnchor = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isScrolled",
})`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${(props) => (props.isScrolled ? "var(--text-primary)" : "#ffffff")};
  mix-blend-mode: ${(props) => (props.isScrolled ? "normal" : "difference")};
  text-decoration: none;
  opacity: 0.7;
  transition: all 0.3s ease;
  &:hover {
    opacity: 1;
    transform: translateY(-1px);
  }
`;

export const ActionBtn = styled(Link, {
  shouldForwardProp: (prop) => prop !== "isScrolled",
})`
  background: none;
  border: none;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  cursor: pointer;
  padding: 0;
  color: ${(props) => (props.isScrolled ? "var(--text-primary)" : "#ffffff")};
  mix-blend-mode: ${(props) => (props.isScrolled ? "normal" : "difference")};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  background-color: var(--bg-primary);
  z-index: 1050; // Above nav
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  display: flex;
  flex-direction: column;
  padding: 2rem 1.5rem;
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

export const SidebarBrand = styled.span`
  font-family: var(--font-serif);
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

export const SidebarLink = styled(Link)`
  font-family: var(--font-serif);
  font-size: 2rem;
  color: var(--text-primary);
  text-decoration: none;
  padding: 1rem 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;
