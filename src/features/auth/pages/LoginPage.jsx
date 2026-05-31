import AuthHeader from "../components/AuthHeader/AuthHeader";
import LoginForm from "../components/LoginForm/LoginForm";
import AuthFooter from "../components/AuthFooter/AuthFooter";
import { ArrowLeft } from "lucide-react";
import { ROUTES } from "@constants/routes";

export default function LoginPage() {
  return (
    <>
      <AuthHeader
        title="Welcome Back."
        subtitle="Continue your shopping journey."
      />

      <LoginForm />

      <AuthFooter>
        <AuthFooter.Link to={ROUTES.HOME}>
          <ArrowLeft size={16} /> Back to shop
        </AuthFooter.Link>
        <AuthFooter.Link to={ROUTES.AUTH.SIGNUP}>
          No access? Join Now
        </AuthFooter.Link>
      </AuthFooter>
    </>
  );
}
