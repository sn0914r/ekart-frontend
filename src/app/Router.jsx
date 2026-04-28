import { Routes, Route } from "react-router-dom";

import LandingPage from "@features/landing/page/LandingPage";
import CartPage from "@features/cart/page/CartPage";
import CheckoutRoutes from "@features/checkout/CheckoutRoutes";
import OrderRoutes from "@features/order/OrderRoutes";
import AuthRoutes from "@features/auth/AuthRoutes";
import ProductRoutes from "@features/product/ProductRoutes";
import WishlistRoutes from "@features/wishlist/WishlistRoutes";

import Profile from "./pages/Profile/ProfilePage";
import AboutPage from "./pages/About/AboutPage";
import NotFound from "./pages/NotFound/NotFoundpage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout/*" element={<CheckoutRoutes />} />
      <Route path="/orders/*" element={<OrderRoutes />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/product/*" element={<ProductRoutes />} />
      <Route path="/wishlist/*" element={<WishlistRoutes />} />

      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<AboutPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
