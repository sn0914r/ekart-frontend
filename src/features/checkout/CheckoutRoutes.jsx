import { Routes, Route } from "react-router-dom";

import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ShippingAddressPage from "./pages/ShippingAddressPage/ShippingAddressPage";

export default function CheckoutRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CheckoutPage />} />
      <Route
        path="shipping-address"
        element={<ShippingAddressPage />}
      />
    </Routes>
  );
}
