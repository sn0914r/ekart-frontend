import useAuthStore from "@app/store/authStore";
import { useCartQuery } from "../api/useCartQuery";

export const useCart = () => {
  const { data: serverResponse, isLoading } = useCartQuery();
  const cartItems = serverResponse?.data?.items ?? [];

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const isItemInCart = (productId) =>
    cartItems.some((item) => item.productId === productId);

  const totalCartItemsCount = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return {
    cartItems,
    isLoading,
    calculateTotal,
    isItemInCart,
    totalCartItemsCount,
    isAuthenticated,
  };
};
