import { Routes, Route } from "react-router-dom";
import OrdersPage from "./pages/OrderListPage/OrdersListPage";
import OrderSuccessPage from "./pages/OrderSuccessPage/OrderSuccessPage";
import OrderDetailsPage from "./pages/OrderDetailsPage/OrderDetailsPage";
import PaymentCallbackPage from "./pages/PaymentCallbackPage/PaymentCallbackPage";

const OrderRoutes = () => (
  <Routes>
    <Route path="/" element={<OrdersPage />} />
    <Route path="success" element={<OrderSuccessPage />} />
    <Route path="payment-callback" element={<PaymentCallbackPage />} />
    <Route path=":id" element={<OrderDetailsPage />} />
  </Routes>
);

export default OrderRoutes;
