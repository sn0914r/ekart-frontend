import { Routes, Route } from "react-router-dom";

import LandingPage from "../features/landing/page/LandingPage";
import AuthRoutes from "../features/auth/AuthRoutes";
import Cart from "../features/cart/page/CartPage";
import OrderRoutes from "../features/order/OrderRoutes";
import Profile from "./pages/ProfilePage";
import NotFound from "./pages/NotFoundpage";
import AdminRoutes from "../features/admin/AdminRoutes";
import AboutPage from "./pages/AboutPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders/*" element={<OrderRoutes />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
};

export default AppRouter;
