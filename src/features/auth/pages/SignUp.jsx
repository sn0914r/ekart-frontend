import { useSignUpForm } from "../useAuthForm";

import AuthInput from "../../../shared/components/Field";
import AuthButton from "../../../shared/components/Button";

import {
  Header,
  Title,
  Subtitle,
  Form,
  BottomLinks,
  StyledLink,
} from "./SignUp.styles";

import { User, Mail, Lock, LockKeyhole, ArrowLeft } from "lucide-react";

const SignUp = () => {
  const { register, errors, isSubmitting, onSubmit } = useSignUpForm();

  return (
    <>
      <Header>
        <Title>Join eKart.</Title>
        <Subtitle>Create an account to unlock exclusive benefits.</Subtitle>
      </Header>

      <Form onSubmit={onSubmit}>
        <AuthInput
          label="Full Name"
          placeholder="Enter your name"
          icon={User}
          error={errors.name}
          {...register("name")}
        />

        <AuthInput
          label="Email Address"
          placeholder="Enter your email"
          icon={Mail}
          error={errors.email}
          {...register("email")}
        />

        <AuthInput
          label="Password"
          type="password"
          placeholder="Create a password"
          icon={Lock}
          error={errors.password}
          {...register("password")}
        />

        <AuthInput
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          icon={LockKeyhole}
          error={errors.confirmPassword}
          {...register("confirmPassword")}
        />

        {errors.root && (
          <div style={{ color: "var(--color-error)", fontSize: "0.85rem" }}>
            {errors.root.message}
          </div>
        )}

        <AuthButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </AuthButton>
      </Form>

      <BottomLinks>
        <StyledLink to="/">
          <ArrowLeft size={16} /> Back to shop
        </StyledLink>
        <StyledLink to="/auth/login">Already have an account? Login</StyledLink>
      </BottomLinks>
    </>
  );
};

export default SignUp;
