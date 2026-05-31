import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import * as S from "./WishlistHeader.styles";

const WishlistHeader = ({ itemCount = 0 }) => {
  return (
    <>
      <S.BackLinkWrapper>
        <Link to="/">
          <ArrowLeft size={16} /> Continue Shopping
        </Link>
      </S.BackLinkWrapper>

      <S.PageTitle>My Wishlist ({itemCount})</S.PageTitle>
    </>
  );
};

export default WishlistHeader;
