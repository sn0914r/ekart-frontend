import { useEffect } from "react";
import { X } from "lucide-react";
import {
  Sidebar,
  SidebarHeader,
  SidebarBrand,
  SidebarLink,
} from "./Navbar.styles";

const NavSidebar = ({ isOpen, onClose, navLinks, user }) => {
  // Prevent body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <Sidebar isOpen={isOpen}>
      <SidebarHeader>
        <SidebarBrand>eKart</SidebarBrand>
        <button
          onClick={onClose}
          style={{ background: "none", border: "none" }}
        >
          <X size={24} strokeWidth={1.5} />
        </button>
      </SidebarHeader>

      {/* Main Navigation Links */}
      {navLinks.map((link) => (
        <SidebarLink
          key={link.name}
          to={link.path}
          onClick={() => {
            onClose();
            if (link.name === "Collections") {
              setTimeout(() => {
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
              }, 300);
            }
          }}
        >
          {link.name}
        </SidebarLink>
      ))}

      {/* Authentication Links */}
      <SidebarLink to="/profile" onClick={onClose}>
        {user ? "Profile" : "Login"}
      </SidebarLink>
    </Sidebar>
  );
};

export default NavSidebar;
