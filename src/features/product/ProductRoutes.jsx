import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";

export default function ProductRoutes() {
  return (
    <Routes>
      <Route path="/:id" element={<ProductPage />} />
    </Routes>
  );
}
