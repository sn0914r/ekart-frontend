import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import Loader from "@shared/components/Loader/Loader";
import useAuthStore from "@store/authStore";

import wishlistHooks from "../wishlist.hooks";

import { PageWrapper, PageTitle, EmptyState } from "./WishlistPage.styles";
import WishlistItem from "../components/WishlistItem/WishlistItem";

const WishlistPage = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  
  const { wishlistItems, isLoading } = wishlistHooks.useWishlistData();
  const removeMutation = wishlistHooks.useRemoveWishlistProduct();

  if (!isAuthenticated) {
    return (
      <PageWrapper className="container">
        <EmptyState>
          <PageTitle>Please Login</PageTitle>
          <p>You need to be logged in to view your wishlist.</p>
          <button 
            className="btn btn-dark px-4 py-2 mt-2" 
            onClick={() => navigate("/auth/login")}
          >
            Login to Continue
          </button>
        </EmptyState>
      </PageWrapper>
    );
  }

  const handleRemove = (productId) => {
    removeMutation.mutate(productId, {
      onSuccess: () => toast.success("Removed from wishlist"),
      onError: (err) => toast.error(err.message || "Failed to remove item")
    });
  };

  if (isLoading) return <Loader />;

  return (
    <PageWrapper className="container">
      <div className="d-flex align-items-center mb-4">
        <Link
          to="/"
          className="text-decoration-none text-muted d-flex align-items-center gap-2 small text-uppercase"
        >
          <ArrowLeft size={16} /> Continue Shopping
        </Link>
      </div>

      <PageTitle>My Wishlist</PageTitle>

      {!wishlistItems || wishlistItems.length === 0 ? (
        <EmptyState>
          <p>Your wishlist is currently empty.</p>
          <Link to="/" className="text-uppercase" style={{ textDecoration: "underline" }}>
            Continue Shopping
          </Link>
        </EmptyState>
      ) : (
        <div className="row row-gap-4">
          {wishlistItems.map((item) => (
            <div key={item.productId} className="col-6 col-sm-6 col-md-4 col-lg-3">
              <WishlistItem 
                item={item} 
                onRemove={handleRemove}
                isRemoving={removeMutation.isPending && removeMutation.variables === item.productId}
              />
            </div>
          ))}
        </div>
      )}
    </PageWrapper>
  );
};

export default WishlistPage;
