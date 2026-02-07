import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../configs/firebase.config";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(AuthContext);
  const [role, setrole] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const idToken = await currentUser.getIdTokenResult();
        setrole(idToken.claims?.role || "");
      }

      setLoading(false);
    });

    return () => unsub();
  });

  useEffect(() => {
    console.log("user changed", user, role);
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, role, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);
export { useAuthContext, AuthProvider };
