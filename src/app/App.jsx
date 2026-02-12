import { Routes, Route } from "react-router-dom";
import LandingPage from "../features/landing/page/LandingPage";
import AuthRoutes from "../routes/AuthRoutes";
import Cart from "../features/cart/page/CartPage";
import OrderRoutes from "../routes/OrderRoutes";
import Profile from "../pages/ProfilePage";
import NotFound from "../pages/NotFoundpage";
import AdminRoutes from "../routes/AdminRoutes";
import AboutPage from "../pages/AboutPage";
import { useAuthContext } from "../auth/AuthContext";
import InitialLoadingPage from "../pages/InitialLoadingPage";

import useBackendHealth from "../shared/hooks/useBackendHealth";

const App = () => {
  const { loading: authLoading } = useAuthContext();
  const { isBackendReady, healthStatus } = useBackendHealth();

  if (authLoading || !isBackendReady) {
    return (
      <InitialLoadingPage
        status={isBackendReady ? "Authenticating..." : healthStatus}
      />
    );
  }
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

export default App;
