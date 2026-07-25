import AuthHeader from "../components/AuthHeader/AuthHeader";
import LoginForm from "../components/LoginForm/LoginForm";
import AuthFooter from "../components/AuthFooter/AuthFooter";
import { ArrowLeft } from "lucide-react";
import { ROUTES } from "@constants/routes";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "@lib/toast";

export default function LoginPage() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("expired") === "true") {
      toast.error("Your session has expired. Please log in again.", {
        duration: 7000,
      });
    }
  }, [searchParams]);

  return (
    <>
      <AuthHeader
        title="Welcome Back."
        subtitle="Continue your shopping journey."
      />

      <LoginForm />

      <AuthFooter>
        <AuthFooter.Link to={ROUTES.PROFILE}>
          <ArrowLeft size={16} /> Back to Profile
        </AuthFooter.Link>
        <AuthFooter.Link to={ROUTES.AUTH.SIGNUP}>
          No access? Join Now
        </AuthFooter.Link>
      </AuthFooter>
    </>
  );
}
