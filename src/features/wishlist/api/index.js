import api from "@lib/apiClient";

export const getWishList = async () => {
  return await api("/wishlist");
};

export const addToWishlist = async ({ productId }) => {
  return await api("/wishlist", {
    method: "POST",
    body: { productId },
  });
};

export const removeFromWishlist = async ({ productId }) => {
  return await api(`/wishlist/${productId}`, {
    method: "DELETE",
  });
};

export const clearWishlist = async () => {
  return await api("/wishlist", {
    method: "DELETE",
  });
};
