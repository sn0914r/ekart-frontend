import { Routes, Route } from "react-router-dom";
import OrdersPage from "./pages/OrderListPage/OrdersListPage";
import OrderSuccessPage from "./pages/OrderSuccessPage/OrderSuccessPage";
import OrderDetailsPage from "./pages/OrderDetailsPage/OrderDetailsPage";

const OrderRoutes = () => (
  <Routes>
    <Route path="/" element={<OrdersPage />} />
    <Route path="success" element={<OrderSuccessPage />} />
    <Route path=":id" element={<OrderDetailsPage />} />
  </Routes>
);

export default OrderRoutes;
