import { createContext, useState } from "react";

const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // TODO: Implement
  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
};

const useCartContext = () => useState(CartContext);

export default CartProvider;
export { useCartContext };