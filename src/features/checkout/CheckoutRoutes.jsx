import { Routes, Route } from "react-router-dom";

import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ShippingAddressPage from "./pages/ShippingAddressPage/ShippingAddressPage";
import PaymentMethodsPage from "./pages/PaymentMethodsPage/PaymentMethodsPage";

export default function CheckoutRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CheckoutPage />} />
      <Route path="shipping-address" element={<ShippingAddressPage />} />
      <Route path="payment" element={<PaymentMethodsPage />} />
    </Routes>
  );
}
