import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { ROUTES } from "@constants/routes";
import AuthHeader from "../components/AuthHeader/AuthHeader";
import ResetPasswordForm from "../components/ResetPasswordForm";
import AuthFooter from "../components/AuthFooter/AuthFooter";

export default function ResetPasswordPage() {
  const [pageStatus, setPageStatus] = useState("form"); // "form" | "success" | "invalid_token"

  let title = "Create New Password.";
  let subtitle = "Set a new password for your eKart account.";

  if (pageStatus === "success") {
    title = "Password Updated.";
    subtitle = "Your password has been changed successfully.";
  } else if (pageStatus === "invalid_token") {
    title = "Invalid Link.";
    subtitle = "This password reset link is missing or expired.";
  }

  return (
    <>
      <AuthHeader title={title} subtitle={subtitle} />

      <ResetPasswordForm
        onSuccess={() => setPageStatus("success")}
        onStatusChange={(status) => setPageStatus(status)}
      />

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
