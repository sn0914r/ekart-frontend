import { useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import useUpdateSearchParams from "@shared/hooks/useUpdateSearchParams";
import { SearchOverlay, SearchInput, CloseBtn } from "./Navbar.styles";

const NavSearch = ({ isOpen, onClose }) => {
  const searchInputRef = useRef(null);
  const updateSearchParams = useUpdateSearchParams(1000);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      // Small delay to allow the overlay animation to complete
      setTimeout(() => searchInputRef.current.focus(), 300);
    }
  }, [isOpen]);

  return (
    <SearchOverlay
      isOpen={isOpen}
      className="d-flex align-items-center justify-content-center"
    >
      <div className="container d-flex align-items-center justify-content-center gap-3 gap-md-5">
        <div className="d-none d-md-block">
          <Search size={32} strokeWidth={1} />
        </div>
        
        <SearchInput
          ref={searchInputRef}
          placeholder="Search the archive..."
          type="text"
          onChange={(e) => updateSearchParams({ search: e.target.value })}
        />
        
        <CloseBtn onClick={onClose}>
          <X size={32} strokeWidth={1} />
        </CloseBtn>
      </div>
    </SearchOverlay>
  );
};

export default NavSearch;
