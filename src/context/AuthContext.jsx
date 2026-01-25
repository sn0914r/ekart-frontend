import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../configs/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const userRef = doc(db, "users", currentUser.uid);
        const snap = await getDoc(userRef);

        if (snap.exists) {
          const token = await currentUser.getIdTokenResult();
          console.log(token)
          setRole(token.claims?.role || "user");
        } else {
          setRole("user");
        }
      } else {
        setRole(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  });

  const logout = async () => {
    await signOut(auth);
  };
  return (
    <AuthContext.Provider value={{ user, logout, loading, role }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
export { useAuthContext };
