import { nanoid } from "nanoid";
import { ADDRESS_STORAGE_KEY } from "../../constants/checkoutKeys";

export const useAddress = () => {
  const KEY = ADDRESS_STORAGE_KEY;

  const getAddresses = () => JSON.parse(localStorage.getItem(KEY)) || [];

  const setAddress = (data) => {
    const newAddress = { ...data, id: nanoid() };
    const oldAddresses = getAddresses();
    return localStorage.setItem(
      KEY,
      JSON.stringify([newAddress, ...oldAddresses]),
    );
  };

  return { getAddresses, setAddress };
};
