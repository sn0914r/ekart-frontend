import { useAuthContext } from "@features/auth/AuthContext";
import useBackendHealth from "@shared/hooks/useBackendHealth";

import InitialLoadingPage from "./pages/InitialLoadingPage/InitialLoadingPage";

import Router from "./Router";

export default function AppRouter() {
  const { loading: authLoading } = useAuthContext();
  const { isBackendReady, healthStatus } = useBackendHealth();

  if (authLoading || !isBackendReady) {
    return (
      <InitialLoadingPage
        status={isBackendReady ? "Authenticating..." : healthStatus}
      />
    );
  }

  return <Router />;
}
