import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // TODO: Implement
  return <AuthProvider value={{ user }}>{children}</AuthProvider>;
};

const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
export { useAuthContext };
