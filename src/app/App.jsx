import { Routes, Route } from "react-router-dom";
import LandingPage from "../features/landing/page/LandingPage";
import AuthRoutes from "../routes/AuthRoutes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth/*" element={<AuthRoutes />} />
    </Routes>
  );
};

export default App;
