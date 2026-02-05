import { Route, Routes } from "react-router-dom";
import CheckoutPage from "../features/order/pages/checkout/CheckoutPage";
import ShippingAddressForm from "../features/order/pages/checkout/ShippingAddressPage";
import ShippingFormLayout from "../features/order/pages/checkout/layout/ShippingFormLayout";
import NotFound from "../pages/NotFoundpage";
import OrdersPage from "../features/order/pages/OrdersListPage";
import OrderSuccessPage from "../features/order/pages/OrderSuccessPage";

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
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default OrderRoutes;
