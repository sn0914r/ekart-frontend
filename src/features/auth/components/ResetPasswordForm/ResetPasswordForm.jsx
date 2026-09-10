import { useEffect } from "react";
import { Lock, CheckCircle2, AlertCircle } from "lucide-react";
import AuthInput from "@shared/components/Field/Field";
import AuthButton from "@shared/components/Button/Button";
import useResetPasswordForm from "./useResetPasswordForm";
import * as S from "./ResetPasswordForm.styles";

const ResetPasswordForm = ({ onSuccess, onStatusChange }) => {
  const {
    register,
    errors,
    isSubmitting,
    onSubmit,
    isSuccess,
    successMessage,
    countdown,
    handleGoHome,
    hasToken,
    handleRequestNewLink,
  } = useResetPasswordForm();

  useEffect(() => {
    if (isSuccess && onSuccess) {
      onSuccess({ message: successMessage });
    }
  }, [isSuccess, successMessage, onSuccess]);

  useEffect(() => {
    if (!hasToken && onStatusChange) {
      onStatusChange("invalid_token");
    }
  }, [hasToken, onStatusChange]);

  if (!hasToken) {
    return (
      <S.StatusContainer>
        <S.IconBadge>
          <AlertCircle size={28} strokeWidth={1.5} />
        </S.IconBadge>

        <S.DescriptionText>
          This password reset link is invalid or has expired. Please request a new link to regain access.
        </S.DescriptionText>

        <S.ActionGroup>
          <AuthButton type="button" onClick={handleRequestNewLink}>
            Request New Reset Link
          </AuthButton>
        </S.ActionGroup>
      </S.StatusContainer>
    );
  }

  if (isSuccess) {
    const progressPercent = ((10 - countdown) / 10) * 100;

    return (
      <S.StatusContainer>
        <S.IconBadge>
          <CheckCircle2 size={28} strokeWidth={1.5} />
        </S.IconBadge>

        <S.DescriptionText>
          Your password has been updated successfully. You can now use your new credentials to sign in.
        </S.DescriptionText>

        <S.CountdownContainer>
          <S.CountdownLabel>
            Redirecting to home in {countdown} {countdown === 1 ? "second" : "seconds"}
          </S.CountdownLabel>
          <S.ProgressBarWrapper>
            <S.ProgressBarFill percent={progressPercent} />
          </S.ProgressBarWrapper>
        </S.CountdownContainer>

        <S.ActionGroup>
          <AuthButton type="button" onClick={handleGoHome}>
            Return to Home Now
          </AuthButton>
        </S.ActionGroup>
      </S.StatusContainer>
    );
  }

  return (
    <S.Form onSubmit={onSubmit}>
      <AuthInput
        label="Enter new Password"
        type="password"
        placeholder="Enter at least 6 characters"
        icon={Lock}
        error={errors.newPassword}
        {...register("newPassword")}
        autoComplete="new-password"
      />

      <AuthInput
        label="Confirm new Password"
        type="password"
        placeholder="Re-enter your new password"
        icon={Lock}
        error={errors.confirmPassword}
        {...register("confirmPassword")}
        autoComplete="new-password"
      />

      {errors.root && (
        <S.ErrorMessage>{errors.root.message}</S.ErrorMessage>
      )}

      <AuthButton type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Updating Password..." : "Reset Password"}
      </AuthButton>
    </S.Form>
  );
};

export default ResetPasswordForm;
