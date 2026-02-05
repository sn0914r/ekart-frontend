import { Routes, Route } from "react-router-dom";
import LandingPage from "../features/landing/page/LandingPage";
import AuthRoutes from "../routes/AuthRoutes";
import Cart from "../features/cart/page/CartPage";
import OrderRoutes from "../routes/OrderRoutes";
import Profile from "../pages/ProfilePage";
import NotFound from "../pages/NotFoundpage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders/*" element={<OrderRoutes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
