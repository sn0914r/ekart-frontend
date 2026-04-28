import { Routes, Route } from "react-router-dom";
import WishlistPage from "./pages/WishlistPage";

export default function WishlistRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WishlistPage />} />
    </Routes>
  );
}
