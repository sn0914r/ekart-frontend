import apiClient from "@lib/apiClient";

const WishlistAPIs = {
  getWishlist: () => apiClient("/wishlist"),
  
  addToWishlist: (productId) =>
    apiClient("/wishlist", {
      method: "POST",
      body: { productId },
    }),
    
  removeWishlistProduct: (productId) =>
    apiClient(`/wishlist/${productId}`, {
      method: "DELETE",
    }),
    
  clearWishlist: () =>
    apiClient("/wishlist", {
      method: "DELETE",
    }),
};

export default WishlistAPIs;
