import { Route, Routes } from "react-router-dom";
import AdminProductPage from "../features/admin/pages/AdminProductPage";
import AdminOrdersPage from "../features/admin/pages/AdminOrdersPage";
import AdminOrderDetailsPage from "../features/admin/pages/AdminOrderDetailsPage";
import AdminDashboardPage from "../features/admin/pages/AdminDashboardPage";

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
