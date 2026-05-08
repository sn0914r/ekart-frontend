import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import * as S from "./WishlistHeader.styles";

const WishlistHeader = () => {
  return (
    <>
      <div className="d-flex align-items-center mb-4">
        <Link
          to="/"
          className="text-decoration-none text-muted d-flex align-items-center gap-2 small text-uppercase"
        >
          <ArrowLeft size={16} /> Continue Shopping
        </Link>
      </div>

      <S.PageTitle>My Wishlist</S.PageTitle>
    </>
  );
};

export default WishlistHeader;
