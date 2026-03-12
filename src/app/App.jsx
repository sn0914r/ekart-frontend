import { useAuthContext } from "../features/auth/AuthContext";
import InitialLoadingPage from "./pages/InitialLoadingPage";
import useBackendHealth from "../shared/hooks/useBackendHealth";
import AppRouter from "./AppRouter";

const App = () => {
  const { loading: authLoading } = useAuthContext();
  const { isBackendReady, healthStatus } = useBackendHealth();

  if (authLoading || !isBackendReady) {
    return (
      <InitialLoadingPage
        status={isBackendReady ? "Authenticating..." : healthStatus}
      />
    );
  }

  return <AppRouter />;
};

export default App;
