import { useAuthContext } from "@features/auth/AuthContext";
import InitialLoadingPage from "./pages/InitialLoadingPage/InitialLoadingPage";
import Router from "./Router";

export default function AppRouter() {
  const { loading: authLoading } = useAuthContext();

  if (authLoading) {
    return <InitialLoadingPage status={"Authenticating..."} />;
  }

  return <Router />;
}
