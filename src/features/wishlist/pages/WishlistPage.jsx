import { useWishlist } from "../hooks/ui/useWishlist";
import Loader from "@shared/components/Loader/Loader";

import WishlistHeader from "../components/WishlistHeader";
import WishlistEmptyState from "../components/WishlistEmptyState";
import AuthPrompt from "@shared/components/AuthPrompt";
import WishlistGrid from "../components/WishlistGrid";
import * as S from "./WishlistPage.styles";

const WishlistPage = () => {
  const { wishlist, isAuthenticated, isLoading, removeItem } = useWishlist();

  if (!isAuthenticated) {
    return (
      <S.PageWrapper>
        <div className="container">
          <AuthPrompt 
            title="Please Login" 
            message="You need to be logged in to view your wishlist." 
          />
        </div>
      </S.PageWrapper>
    );
  }

  if (isLoading) return <Loader />;

  if (!wishlist || wishlist.length === 0) {
    return (
      <S.PageWrapper>
        <div className="container">
          <WishlistEmptyState />
        </div>
      </S.PageWrapper>
    );
  }

  return (
    <S.PageWrapper>
      <div className="container">
        <WishlistHeader itemCount={wishlist.length} />
        <WishlistGrid items={wishlist} onRemove={removeItem} />
      </div>
    </S.PageWrapper>
  );
};

export default WishlistPage;
