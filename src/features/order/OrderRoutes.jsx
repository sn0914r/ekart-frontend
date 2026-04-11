import { Routes, Route } from "react-router-dom";
import OrdersPage from "./pages/OrderListPage/OrdersListPage";
import OrderSuccessPage from "./pages/OrderSuccessPage/OrderSuccessPage";

const OrderRoutes = () => (
  <Routes>
    <Route path="/" element={<OrdersPage />} />
    <Route path="success" element={<OrderSuccessPage />} />
  </Routes>
);

export default OrderRoutes;
