import useRegister from "./useRegisterForm";
import AuthInput from "@shared/components/Field/Field";
import AuthButton from "@shared/components/Button/Button";
import { User, Mail, Lock, LockKeyhole } from "lucide-react";
import * as S from "./RegisterForm.styles";

const RegisterForm = () => {
  const { register, errors, isSubmitting, onSubmit } = useRegister();

  return (
    <S.Form onSubmit={onSubmit}>
      <AuthInput
        label="Full Name"
        placeholder="Enter your name"
        icon={User}
        error={errors.name}
        {...register("name")}
        autoComplete="name"
      />

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
        placeholder="Create a password"
        icon={Lock}
        error={errors.password}
        {...register("password")}
        autoComplete="new-password"
      />

      <AuthInput
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        icon={LockKeyhole}
        error={errors.confirmPassword}
        {...register("confirmPassword")}
        autoComplete="new-password"
      />

      {errors.root && (
        <S.ErrorMessage>
          {errors.root.message}
        </S.ErrorMessage>
      )}

      <AuthButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Creating Account..." : "Create Account"}
      </AuthButton>
    </S.Form>
  );
};

export default RegisterForm;
