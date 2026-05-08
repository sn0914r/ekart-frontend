import { Link } from "react-router-dom";
import * as S from "./WishlistEmptyState.styles";

const WishlistEmptyState = () => {
  return (
    <S.EmptyState>
      <p>Your wishlist is currently empty.</p>
      <Link to="/" className="text-uppercase" style={{ textDecoration: "underline" }}>
        Continue Shopping
      </Link>
    </S.EmptyState>
  );
};

export default WishlistEmptyState;
