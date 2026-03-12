import { Route, Routes } from "react-router-dom";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import ShippingAddressForm from "./pages/checkout/ShippingAddressPage";
import ShippingFormLayout from "./pages/checkout/layout/ShippingFormLayout";
import OrdersPage from "./pages/OrdersListPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";

const OrderRoutes = () => (
  <Routes>
    <Route path="/" element={<OrdersPage />} />
    <Route path="/checkout" element={<CheckoutPage />} />
    <Route
      path="/new-address"
      element={
        <ShippingFormLayout>
          <ShippingAddressForm />
        </ShippingFormLayout>
      }
    />
    <Route path="/success" element={<OrderSuccessPage />} />
  </Routes>
);

export default OrderRoutes;
