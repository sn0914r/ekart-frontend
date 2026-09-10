import { useNavigate } from "react-router-dom";
import { ROUTES } from "@constants/routes";
import useLoginForm from "./useLoginForm";
import AuthInput from "@shared/components/Field/Field";
import AuthButton from "@shared/components/Button/Button";
import { Mail, Lock } from "lucide-react";
import * as S from "./LoginForm.styles";

const LoginForm = () => {
  const navigate = useNavigate();
  const { register, errors, isSubmitting, onSubmit } = useLoginForm();

  return (
    <S.Form onSubmit={onSubmit}>
      <AuthInput
        label="Email Address"
        placeholder="Enter your email"
        icon={Mail}
        error={errors.email}
        {...register("email")}
        autoComplete="email"
      />

      <AuthInput
        label="Password"
        type="password"
        placeholder="Enter your password"
        icon={Lock}
        error={errors.password}
        {...register("password")}
        autoComplete="current-password"
      />

      <S.ForgotPasswordLink
        type="button"
        onClick={() => navigate(ROUTES.AUTH.FORGOT_PASSWORD)}
      >
        Forgot password?
      </S.ForgotPasswordLink>

      {errors.root && (
        <S.ErrorMessage>
          {errors.root.message}
        </S.ErrorMessage>
      )}

      <AuthButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Authenticating..." : "Login to eKart"}
      </AuthButton>
    </S.Form>
  );
};

export default LoginForm;
