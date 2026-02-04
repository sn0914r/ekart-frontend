import { Routes, Route } from "react-router-dom";
import Login from "../auth/pages/Login";
import AuthLayout from "../auth/Layout/AuthLayout";
import SignUp from "../auth/pages/SignUp";

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
    </Routes>
  );
};

export default AuthRoutes;
