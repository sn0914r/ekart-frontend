import { Routes, Route } from "react-router-dom";
import Login from "../auth/pages/Login";
import AuthLayout from "../auth/layout/AuthLayout"
import SignUp from "../auth/pages/SignUp";
import NotFound from "../pages/NotFoundpage";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route
        path="login"
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />

      <Route
        path="signup"
        element={
          <AuthLayout>
            <SignUp />
          </AuthLayout>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AuthRoutes;
