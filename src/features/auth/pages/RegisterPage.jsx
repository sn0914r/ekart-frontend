import AuthHeader from "../components/AuthHeader/AuthHeader";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import AuthFooter from "../components/AuthFooter/AuthFooter";
import { ArrowLeft } from "lucide-react";
import { ROUTES } from "@constants/routes";

export default function RegisterPage() {
  return (
    <>
      <AuthHeader
        title="Create Account."
        subtitle="Join eKart and discover your next favorite style."
      />

      <RegisterForm />

      <AuthFooter variant="vertical">
        <AuthFooter.Link to={ROUTES.PROFILE}>
          <ArrowLeft size={16} /> Back to Profile
        </AuthFooter.Link>
        <AuthFooter.Link to={ROUTES.AUTH.LOGIN}>
          Already have an account? Login
        </AuthFooter.Link>
      </AuthFooter>
    </>
  );
}
