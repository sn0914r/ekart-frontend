import { ArrowLeft } from "lucide-react";
import { ROUTES } from "@constants/routes";
import AuthHeader from "../components/AuthHeader/AuthHeader";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import AuthFooter from "../components/AuthFooter/AuthFooter";

export default function ForgotPasswordPage() {
  return (
    <>
      <AuthHeader
        title="Reset Password."
        subtitle="Enter your email to receive recovery instructions."
      />

      <ForgotPasswordForm />

      <AuthFooter>
        <AuthFooter.Link to={ROUTES.AUTH.LOGIN}>
          <ArrowLeft size={16} /> Back to Login
        </AuthFooter.Link>
        <AuthFooter.Link to={ROUTES.AUTH.SIGNUP}>
          No account? Join Now
        </AuthFooter.Link>
      </AuthFooter>
    </>
  );
}
