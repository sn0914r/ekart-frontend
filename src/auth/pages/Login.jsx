import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUserSchema } from "../auth.schema";

import AuthQuery from "../auth.query";

import AuthInput from "../../shared/components/Field"
import AuthButton from "../../shared/components/Button";

import { useNavigate } from "react-router-dom";

import {
  Header,
  Title,
  Subtitle,
  Form,
  BottomLinks,
  StyledLink,
} from "./Login.styles";

import { ArrowLeft, Mail, Lock } from "lucide-react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginUserSchema),
  });

  const navigate = useNavigate();

  const loginMutation = AuthQuery.useLogin();
  const onSubmit = async (data) => {
    alert("logging in");
    await loginMutation.mutateAsync({
      email: data.email,
      password: data.password,
    });
    alert("logged in successfully");
    navigate("/");
  };

  return (
    <>
      <Header>
        <Title>Welcome Back.</Title>
        <Subtitle>Access your selections and history.</Subtitle>
      </Header>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          label="Email Address"
          placeholder="Enter your email"
          icon={Mail}
          error={errors.email}
          {...register("email")}
        />

        <AuthInput
          label="Password"
          placeholder="Enter your password"
          icon={Lock}
          error={errors.password}
          {...register("password")}
        />

        {errors.root && (
          <div className="text-danger text-sm mt-2">{errors.root.message}</div>
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
};

export default Login;
