import { Route, Routes } from "react-router-dom";
import AdminProductPage from "./pages/AdminProductPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import AdminOrderDetailsPage from "./pages/AdminOrderDetailsPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";

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
