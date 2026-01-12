import { BrowserRouter, Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Success from "../pages/Success";
import Admin from "../pages/Admin";

const AppRoutes = () => {
  return (
    <BrowserRouter>
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
