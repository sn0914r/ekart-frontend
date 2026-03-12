import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AuthLayout from "./layout/AuthLayout";
import SignUp from "./pages/SignUp";

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
