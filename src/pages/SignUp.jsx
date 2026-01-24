import styled from "@emotion/styled";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, User, Mail, AlertTriangle, Lock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useToast } from "../context/ToastContext";
import { authApi } from "../api/auth.api";
import { signInWithCustomToken } from "firebase/auth";
import { auth } from "../configs/firebase";

const PageWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem;
`;

const FormCard = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin-bottom: 3.5rem;
  text-align: left;
`;

const Title = styled.h1`
  font-family: var(--font-serif);
  font-size: 3rem;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
`;

const Label = styled.label`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 700;
  color: var(--text-primary);
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const InputIcon = styled.div`
  position: absolute;
  left: 0;
  color: ${(props) => (props.hasError ? "#ff4d4d" : "#cccccc")};
  transition: color 0.3s ease;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid
    ${(props) => (props.hasError ? "#ff4d4d" : "#eeeeee")};
  padding: 0.75rem 0 0.75rem 2.5rem;
  font-family: var(--font-sans);
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-bottom-color: #000000;
  }

  &::placeholder {
    color: #cccccc;
  }
`;

const ErrorMessage = styled.div`
  font-size: 0.75rem;
  color: #ff4d4d;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const SignUpBtn = styled.button`
  background-color: #000000;
  color: #ffffff;
  border: none;
  padding: 1.25rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  cursor: pointer;
  margin-top: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #222222;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const BackToShop = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 600;
  color: var(--text-secondary);
  text-decoration: none;
  margin-top: 3rem;
  transition: color 0.3s ease;

  &:hover {
    color: #000000;
  }
`;

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addToast } = useToast();

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please provide a valid email address.";
    }
    if (!formData.password) {
      newErrors.password = "A secure password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      const token = await authApi.createUser(formData);
      addToast(
        "success",
        "Membership established. Redirecting to collection...",
      );
      await signInWithCustomToken(auth, token);
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Error creating user:", error);
      setIsSubmitting(false);
      const msg =
        error.message || "Failed to sign up. Please verify credentials.";
      setErrors({ message: msg });
      addToast("failure", msg);
    }
  };

  return (
    <PageWrapper>
      <ContentArea>
        <FormCard>
          <Header>
            <Title>Join eKart</Title>
            <Subtitle>
              Enter the world of curated aesthetics. Access exclusive seasons
              and limited releases.
            </Subtitle>
          </Header>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Full Name</Label>
              <InputWrapper>
                <InputIcon hasError={!!errors.name}>
                  <User size={18} strokeWidth={1.5} />
                </InputIcon>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  hasError={!!errors.name}
                />
              </InputWrapper>
              {errors.name && (
                <ErrorMessage>
                  <AlertTriangle size={12} /> {errors.name}
                </ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label>Email Address</Label>
              <InputWrapper>
                <InputIcon hasError={!!errors.email}>
                  <Mail size={18} strokeWidth={1.5} />
                </InputIcon>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your mail"
                  value={formData.email}
                  onChange={handleChange}
                  hasError={!!errors.email}
                />
              </InputWrapper>
              {errors.email && (
                <ErrorMessage>
                  <AlertTriangle size={12} /> {errors.email}
                </ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label>Password</Label>
              <InputWrapper>
                <InputIcon hasError={!!errors.password}>
                  <Lock size={18} strokeWidth={1.5} />
                </InputIcon>
                <Input
                  type="password"
                  name="password"
                  placeholder="Min. 6 characters"
                  value={formData.password}
                  onChange={handleChange}
                  hasError={!!errors.password}
                />
              </InputWrapper>
              {errors.password && (
                <ErrorMessage>
                  <AlertTriangle size={12} /> {errors.password}
                </ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label>Confirm Password</Label>
              <InputWrapper>
                <InputIcon hasError={!!errors.confirmPassword}>
                  <Lock size={18} strokeWidth={1.5} />
                </InputIcon>
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  hasError={!!errors.confirmPassword}
                />
              </InputWrapper>
              {errors.confirmPassword && (
                <ErrorMessage>
                  <AlertTriangle size={12} /> {errors.confirmPassword}
                </ErrorMessage>
              )}
            </FormGroup>

            <SignUpBtn type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Authenticating..." : "Sign Up"}
            </SignUpBtn>
          </Form>

          <BackToShop to="/">
            <ArrowLeft size={16} /> Back to the collection
          </BackToShop>
        </FormCard>
      </ContentArea>
    </PageWrapper>
  );
};

export default SignUp;
