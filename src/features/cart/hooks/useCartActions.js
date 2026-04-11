import { toast } from "sonner";

export default function useCartActions(cartItems, setCartItems, updateCart) {
  const syncWithBackend = (items) => {
    if (updateCart) {
      const formattedItems = items.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
      }));
      updateCart({ items: formattedItems });
    }
  };

  /**
   * takes product and adds it to the cart
   * if it already exists, it updates the quantity
   */
  const addToCart = (product, qty = 1) => {
    setCartItems((prev) => {
      const found = prev.find((item) => item.id === product.id);
      let newItems;
      if (found) {
        newItems = prev.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + qty };
          }
          return item;
        });
      } else {
        toast.success("Item added to cart");
        newItems = [...prev, { ...product, quantity: qty }];
      }
      syncWithBackend(newItems);
      return newItems;
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const newItems = prev.filter((item) => item.id !== id);
      syncWithBackend(newItems);
      return newItems;
    });
    toast.info("Item removed from cart");
  };

  const decreaseQty = (id) => {
    setCartItems((prev) => {
      const newItems = prev
        .map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
      syncWithBackend(newItems);
      return newItems;
    });
  };

  const increaseQty = (id) => {
    setCartItems((prev) => {
      const newItems = prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      syncWithBackend(newItems);
      return newItems;
    });
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
    syncWithBackend([]);
  };

  return {
    addToCart,
    removeFromCart,
    decreaseQty,
    increaseQty,
    calculateTotal,
    totalCartItems,
    checkItem,
    getCartList,
    clearCart,
  };
}
