const useCart = () => {
  const KEY = "cart-sn0914r";

  const setCart = (data) => {
    localStorage.setItem(KEY, JSON.stringify(data));
  };

  const getCart = () => {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  };

  return { setCart, getCart };
};

export default useCart;
