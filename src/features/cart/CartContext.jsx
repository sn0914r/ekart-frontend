import { createContext, useState, useEffect, useContext } from "react";
import useCart from "./useCart";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const { getCart, setCart } = useCart();
  const [cartItems, setCartItems] = useState(getCart());

  useEffect(() => {
    setCart(cartItems);
    console.log(cartItems);
  }, [cartItems]);

  /**
   * takes product and adds it to the cart
   * if it already exists, it updates the quantity
   */
  const addToCart = (product, qty = 1) => {
    setCartItems((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + qty };
          }
          return item;
        });
      }
      return [...prev, { ...product, quantity: qty }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }),
    );
  };

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      }),
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const totalCartItems = () => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  };

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
