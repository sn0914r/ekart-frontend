import { createContext, useState, useEffect, useContext } from "react";

import useCart from "./hooks/useCart";
import CartHooks from "./cart.hooks";
import useCartActions from "./hooks/useCartActions";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const { getCart, setCart } = useCart();
  const [cartItems, setCartItems] = useState(getCart());
  const [isInitialized, setIsInitialized] = useState(false);

  const { data: serverCart, isSuccess } = CartHooks.useGetCart();
  const { mutate: updateCart } = CartHooks.useUpdateCart();

  useEffect(() => {
    if (isSuccess && !isInitialized && serverCart) {
      const items = Array.isArray(serverCart) ? serverCart : (serverCart.items || []);
      if (items.length > 0) {
        setCartItems(items);
      }
      setIsInitialized(true);
    }
  }, [serverCart, isSuccess, isInitialized]);

  useEffect(() => {
    setCart(cartItems);
  }, [cartItems, setCart]);

  const {
    addToCart,
    removeFromCart,
    decreaseQty,
    increaseQty,
    calculateTotal,
    totalCartItems,
    checkItem,
    getCartList,
    clearCart,
  } = useCartActions(cartItems, setCartItems, updateCart);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        decreaseQty,
        increaseQty,
        calculateTotal,
        totalCartItems,
        checkItem,
        getCartList,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
