import AppRouter from "./AppRouter";
import Providers from "./Providers";

export default function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}
