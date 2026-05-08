import { useNavigate } from "react-router-dom";
import * as S from "./WishlistAuthPrompt.styles";

const WishlistAuthPrompt = () => {
  const navigate = useNavigate();
  return (
    <S.EmptyState>
      <S.PageTitle>Please Login</S.PageTitle>
      <p>You need to be logged in to view your wishlist.</p>
      <button 
        className="btn btn-dark px-4 py-2 mt-2" 
        onClick={() => navigate("/auth/login")}
      >
        Login to Continue
      </button>
    </S.EmptyState>
  );
};

export default WishlistAuthPrompt;
