import { Routes, Route } from "react-router-dom";
import LandingPage from "../features/landing/page/LandingPage";
import AuthRoutes from "../routes/AuthRoutes";
import Cart from "../features/cart/page/CartPage";
import OrderRoutes from "../routes/OrderRoutes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders/*" element={<OrderRoutes />} />
    </Routes>
  );
};

export default App;
