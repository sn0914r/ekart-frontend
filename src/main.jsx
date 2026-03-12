import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app/app.css";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./configs/reactQuery";
import { CartProvider } from "./features/cart/CartContext";
import { AuthProvider } from "./features/auth/AuthContext";

import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Toaster richColors duration={5000} closeButton position="top-right" />
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>,
);
