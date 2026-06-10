import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import * as S from "./AuthPrompt.styles";

const AuthPrompt = ({ title = "Please Login", message = "You need to be logged in to view this page." }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <S.EmptyState>
      <S.BackLink to="/">
        <ArrowLeft size={16} /> Continue Shopping
      </S.BackLink>
      <S.PageTitle>{title}</S.PageTitle>
      <S.Message>{message}</S.Message>
      <S.LoginBtn 
        onClick={() => {
          const currentUrl = encodeURIComponent(location.pathname + location.search);
          navigate(`/auth/login?redirectTo=${currentUrl}`);
        }}
      >
        Login to Continue
      </S.LoginBtn>
    </S.EmptyState>
  );
};

export default AuthPrompt;
