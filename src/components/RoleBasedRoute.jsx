import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const RoleBasedRoute = ({ allowedRoles = [], children }) => {
  const { user, role, loading } = useAuthContext();

  if (loading) return <div>Loading...</div>;

  if (!user) return <Navigate to="/login" />;

  if (allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    return <Navigate to="/" />;
  }

  return children;
};

export default RoleBasedRoute;
