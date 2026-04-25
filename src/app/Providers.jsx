import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@lib/reactQuery";

import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";

export default function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Toaster richColors duration={5000} closeButton position="bottom-right" />
        {children}
      </BrowserRouter>
    </QueryClientProvider>
  );
}
