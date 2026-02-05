import { generateRandomString } from "../../../../utils/generateRandomString";

const useAddress = () => {
  const KEY = "address-sn0914r";

  const getAddresses = () => {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  };

  const setAddress = (data) => {
    const newAddress = { ...data, id: generateRandomString(5) };
    const addresses = getAddresses();
    return localStorage.setItem(
      KEY,
      JSON.stringify([...addresses, newAddress]),
    );
  };

  const deleteAddress = (id) => {
    const addresses = getAddresses();
    return localStorage.setItem(
      KEY,
      JSON.stringify(addresses.filter((add) => add.id !== id)),
    );
  };

  return { setAddress, getAddresses, deleteAddress };
};

export { useAddress };
