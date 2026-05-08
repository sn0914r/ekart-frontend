import { useCartQuery } from "../api/useCartQuery";

export const useCart = () => {
  const { data, isLoading } = useCartQuery();
  const cartItems = data?.cart?.items ?? [];

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const isItemInCart = (productId) =>
    cartItems.some((item) => item.productId === productId);

  const totalCartItemsCount = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  return {
    cartItems,
    isLoading,
    calculateTotal,
    isItemInCart,
    totalCartItemsCount,
  };
};
