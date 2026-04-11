import { Routes, Route } from "react-router-dom";
import AdminProductPage from "./pages/AdminProductsPage/AdminProductPage";
import AdminOrdersPage from "./pages/AdminOrdersPage/AdminOrdersPage";
import AdminOrderDetailsPage from "./pages/AdminOrderDetailsPage/AdminOrderDetailsPage";
import AdminDashboardPage from "./pages/AdminDashboardPage/AdminDashboardPage";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="products" element={<AdminProductPage />} />
      <Route path="orders" element={<AdminOrdersPage />} />
      <Route path="orders/:id" element={<AdminOrderDetailsPage />} />
      <Route path="dashboard" element={<AdminDashboardPage />} />
    </Routes>
  );
};

export default AdminRoutes;
