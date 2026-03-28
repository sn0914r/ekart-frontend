import { createContext, useState, useEffect, useContext } from "react";
import useCart from "./useCart";
import CartHooks from "./cart.hooks";
import { toast } from "sonner";

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
    if (isInitialized) {
      const formattedItems = cartItems.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
      }));
      updateCart({ items: formattedItems });
    }
  }, [cartItems, isInitialized, setCart, updateCart]);

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
      toast.success("Item added to cart");
      return [...prev, { ...product, quantity: qty }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.info("Item removed from cart");
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0),
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

  const checkItem = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? true : false;
  };

  /**
   * @desc formats the cart list for backend request
   */
  const getCartList = () => {
    return cartItems.map((item) => {
      return {
        productId: item.id,
        quantity: item.quantity,
      };
    });
  };

  const clearCart = () => {
    setCartItems([]);
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
