import { useNavigate } from "react-router-dom";
import ErrorMessage from "@shared/components/ErrorMessage";
import { useLogoutMutation } from "@features/auth/hooks/api/useLogoutMutation";
import * as S from "./ForbiddenPage.styles";

const ForbiddenPage = () => {
  const navigate = useNavigate();
  const { mutate: logout, isPending } = useLogoutMutation();

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => navigate("/auth/login"),
    });
  };

  return (
    <S.PageWrapper>
      <ErrorMessage 
        heading="Access Denied" 
        actionLabel="Back to Home"
        onAction={() => navigate("/")}
      >
        You do not have permission to access this resource.
      </ErrorMessage>

      <S.LogoutContainer>
        <S.LogoutText>Signed in with the wrong account?</S.LogoutText>
        <S.LogoutBtn onClick={handleLogout} disabled={isPending}>
          {isPending ? "Logging out..." : "Log Out"}
        </S.LogoutBtn>
      </S.LogoutContainer>
    </S.PageWrapper>
  );
};

export default ForbiddenPage;
