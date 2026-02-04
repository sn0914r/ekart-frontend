import { Routes, Route } from "react-router-dom";
import LandingPage from "../features/landing/page/LandingPage";
import AuthRoutes from "../routes/AuthRoutes";
import Cart from "../features/cart/page/CartPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default App;
