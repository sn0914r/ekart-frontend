import { Mail, CheckCircle2, Clock } from "lucide-react";
import AuthInput from "@shared/components/Field/Field";
import AuthButton from "@shared/components/Button/Button";
import useForgotPasswordForm from "./useForgotPasswordForm";
import * as S from "./ForgotPasswordForm.styles";

const ForgotPasswordForm = () => {
  const {
    register,
    errors,
    isSubmitting,
    onSubmit,
    isSuccess,
    submittedEmail,
    countdown,
    handleGoHome,
    handleReset,
    handleResend,
  } = useForgotPasswordForm();

  if (isSuccess) {
    return (
      <S.InlineStatusWrapper>
        <S.StatusBanner>
          <S.BannerHeader>
            <S.IconWrap>
              <CheckCircle2 size={20} strokeWidth={1.75} />
            </S.IconWrap>
            <S.BannerTitle>Recovery Link Sent</S.BannerTitle>
          </S.BannerHeader>

          <S.BannerMessage>
            We have sent password reset instructions to{" "}
            <strong>{submittedEmail}</strong>. Please follow the link in the message to reset your password.
          </S.BannerMessage>

          <S.CountdownRow>
            <Clock size={14} />
            <span>Redirecting to home in {countdown} {countdown === 1 ? "second" : "seconds"}...</span>
          </S.CountdownRow>
        </S.StatusBanner>

        <S.ActionGroup>
          <AuthButton type="button" onClick={handleGoHome}>
            Return to Home Now
          </AuthButton>

          <S.LinksRow>
            <S.TextLinkButton type="button" onClick={handleResend} disabled={isSubmitting}>
              Resend link
            </S.TextLinkButton>
            <S.DividerDot>•</S.DividerDot>
            <S.TextLinkButton type="button" onClick={handleReset}>
              Use different email
            </S.TextLinkButton>
          </S.LinksRow>
        </S.ActionGroup>
      </S.InlineStatusWrapper>
    );
  }

  return (
    <S.Form onSubmit={onSubmit}>
      <AuthInput
        label="Email Address"
        placeholder="Enter your registered email"
        icon={Mail}
        error={errors.email}
        {...register("email")}
        autoComplete="email"
      />

      {errors.root && (
        <S.ErrorMessage>{errors.root.message}</S.ErrorMessage>
      )}

      <AuthButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending Reset Link..." : "Send Reset Link"}
      </AuthButton>
    </S.Form>
  );
};

export default ForgotPasswordForm;
