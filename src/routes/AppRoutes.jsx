import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Success from "../pages/Success";
import Admin from "../pages/Admin";
import SignUp from "../pages/SignUp";
import Orders from "../pages/Orders";
import Notfound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/cart" element={<Cart />} />

      {/* Protected Routes (User) */}
      <Route path="/orders" element={<Orders />} />

      {/* Admin Routes (Admin) */}
      <Route path="/admin" element={<Admin />} />

      {/* Other Routes */}
      <Route path="/payment-success" element={<Success />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default AppRoutes;
