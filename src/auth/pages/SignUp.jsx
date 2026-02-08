import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpUserSchema } from "../auth.schema";

import { useNavigate } from "react-router-dom";

import AuthInput from "../../shared/components/Field";
import AuthButton from "../../shared/components/Button";

import {
  Header,
  Title,
  Subtitle,
  Form,
  BottomLinks,
  StyledLink,
} from "./SignUp.styles";

import AuthQuery from "../auth.query";

import { User, Mail, Lock, LockKeyhole, ArrowLeft } from "lucide-react";

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signUpUserSchema),
  });

  const signUpMutation = AuthQuery.useSignUp();

  const onSubmit = async (data) => {
    await signUpMutation.mutateAsync({
      name: data.name,
      email: data.email,
      password: data.password,
    });
    navigate("/");
  };

  return (
    <>
      <Header>
        <Title>Join eKart.</Title>
        <Subtitle>Create an account to unlock exclusive benefits.</Subtitle>
      </Header>

      <Form onSubmit={handleSubmit(onSubmit)}>
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
          <div className="text-danger text-sm mt-2">{errors.root.message}</div>
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
