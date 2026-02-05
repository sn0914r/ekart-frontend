import { Route, Routes } from "react-router-dom";
import CheckoutPage from "../features/order/pages/checkout/CheckoutPage";
import ShippingAddressForm from "../features/order/pages/checkout/ShippingAddressPage";
import ShippingFormLayout from "../features/order/pages/checkout/layout/ShippingFormLayout";

const OrderRoutes = () => (
  <Routes>
    <Route path="/checkout" element={<CheckoutPage />} />
    <Route
      path="/new-address"
      element={
        <ShippingFormLayout>
          <ShippingAddressForm />
        </ShippingFormLayout>
      }
    />
  </Routes>
);

export default OrderRoutes;
