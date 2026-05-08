import { useWishlist } from "../hooks/ui/useWishlist";
import Loader from "@shared/components/Loader/Loader";

import WishlistHeader from "../components/WishlistHeader";
import WishlistEmptyState from "../components/WishlistEmptyState";
import WishlistAuthPrompt from "../components/WishlistAuthPrompt";
import WishlistGrid from "../components/WishlistGrid";
import * as S from "./WishlistPage.styles";

const WishlistPage = () => {
  const { wishlist, isAuthenticated, isLoading, removeItem } = useWishlist();

  if (!isAuthenticated) {
    return (
      <S.PageWrapper className="container">
        <WishlistAuthPrompt />
      </S.PageWrapper>
    );
  }

  if (isLoading) return <Loader />;

  return (
    <S.PageWrapper className="container">
      <WishlistHeader />

      {!wishlist || wishlist.length === 0 ? (
        <WishlistEmptyState />
      ) : (
        <WishlistGrid items={wishlist} onRemove={removeItem} />
      )}
    </S.PageWrapper>
  );
};

export default WishlistPage;
