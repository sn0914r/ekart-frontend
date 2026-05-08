import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddress } from "./useAddress";

export const useCheckoutAddress = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const { getAddresses } = useAddress();
  const navigate = useNavigate();
  const addresses = getAddresses();
  const navigateToAddressForm = () => navigate("/checkout/shipping-address");

  return {
    addresses,
    selectedAddress,
    setSelectedAddress,
    navigateToAddressForm,
  };
};
