import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage";
import AuthLayout from "./layout/AuthLayout";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
