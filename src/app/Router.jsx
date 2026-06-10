import { Routes, Route } from "react-router-dom";
import { ROUTES } from "@constants/routes";

import LandingPage from "@features/product/pages/Landing/page/LandingPage";
import CartPage from "@features/cart/page/CartPage";
import CheckoutRoutes from "@features/checkout/CheckoutRoutes";
import OrderRoutes from "@features/order/OrderRoutes";
import AuthRoutes from "@features/auth/AuthRoutes";
import ProductRoutes from "@features/product/ProductRoutes";
import WishlistRoutes from "@features/wishlist/WishlistRoutes";

import Profile from "./pages/Profile/ProfilePage";
import AboutPage from "./pages/About/AboutPage";
import NotFound from "./pages/NotFound/NotFoundPage";
import ForbiddenPage from "./pages/ForbiddenPage";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<LandingPage />} />
      <Route path={ROUTES.CART} element={<CartPage />} />
      <Route path={ROUTES.CHECKOUT.ROOT} element={<CheckoutRoutes />} />
      <Route path={ROUTES.ORDERS.ROOT} element={<OrderRoutes />} />
      <Route path={ROUTES.AUTH.ROOT} element={<AuthRoutes />} />
      <Route path={ROUTES.PRODUCT.ROOT} element={<ProductRoutes />} />
      <Route path={ROUTES.WISHLIST.ROOT} element={<WishlistRoutes />} />

      <Route path={ROUTES.PROFILE} element={<Profile />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.FORBIDDEN} element={<ForbiddenPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
