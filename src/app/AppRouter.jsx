import useAuthStore from "@store/authStore";
import InitialLoadingPage from "./pages/InitialLoadingPage/InitialLoadingPage";
import Router from "./Router";

export default function AppRouter() {
  const isHydrated = useAuthStore((state) => state.isHydrated);

  if (!isHydrated) {
    return <InitialLoadingPage status={"Authenticating..."} />;
  }

  return <Router />;
}
