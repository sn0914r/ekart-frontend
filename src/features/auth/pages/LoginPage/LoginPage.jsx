import useLoginForm from "./useLoginForm";

import AuthInput from "@shared/components/Field/Field";
import AuthButton from "@shared/components/Button/Button";

import {
  Header,
  Title,
  Subtitle,
  Form,
  BottomLinks,
  StyledLink,
} from "./LoginPage.styles";

import { ArrowLeft, Mail, Lock } from "lucide-react";

export default function LoginPage() {
  const { register, errors, isSubmitting, onSubmit } = useLoginForm();

  return (
    <>
      <Header>
        <Title>Welcome Back.</Title>
        <Subtitle>Access your selections and history.</Subtitle>
      </Header>

      <Form onSubmit={onSubmit}>
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
          placeholder="Enter your password"
          icon={Lock}
          error={errors.password}
          {...register("password")}
        />

        {errors.root && (
          <div style={{ color: "var(--color-error)", fontSize: "0.85rem" }}>
            {errors.root.message}
          </div>
        )}

        <AuthButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Authenticating..." : "Login to eKart"}
        </AuthButton>
      </Form>

      <BottomLinks>
        <StyledLink to="/">
          <ArrowLeft size={16} /> Back to shop
        </StyledLink>
        <StyledLink to="/auth/signup">No access? Join Now</StyledLink>
      </BottomLinks>
    </>
  );
}
