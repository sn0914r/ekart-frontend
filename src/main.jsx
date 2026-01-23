import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AuthProvider from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";

import "./styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>,
);
