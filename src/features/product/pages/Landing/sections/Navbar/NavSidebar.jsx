import { useEffect } from "react";
import { X } from "lucide-react";
import { Sidebar, SidebarHeader, SidebarBrand, SidebarLink } from "./Navbar.styles";

const NavSidebar = ({ isOpen, onClose, navLinks, user }) => {
  // Prevent body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <Sidebar isOpen={isOpen}>
      <SidebarHeader>
        <SidebarBrand>eKart</SidebarBrand>
        <button onClick={onClose} style={{ background: "none", border: "none" }}>
          <X size={24} strokeWidth={1.5} />
        </button>
      </SidebarHeader>
      
      {/* Main Navigation Links */}
      {navLinks.map((link) => (
        <SidebarLink
          key={link.name}
          to={link.path}
          onClick={onClose}
        >
          {link.name}
        </SidebarLink>
      ))}

      {/* Authentication Links */}
      {user ? (
        <SidebarLink to="/profile" onClick={onClose}>
          Profile
        </SidebarLink>
      ) : (
        <>
          <SidebarLink to="/auth/login" onClick={onClose}>
            Login
          </SidebarLink>
          <SidebarLink to="/auth/signup" onClick={onClose}>
            Signup
          </SidebarLink>
        </>
      )}
    </Sidebar>
  );
};

export default NavSidebar;
