import useAuthStore from "../../store/authStore";
import { useLogoutMutation } from "@features/auth/hooks/api/useLogoutMutation";

import GuestProfile from "./components/GuestProfile/GuestProfile";
import UserInfo from "./components/UserInfo/UserInfo";
import ProfileActions from "./components/ProfileActions/ProfileActions";

import { ROUTES } from "@constants/routes";
import { ArrowLeft } from "lucide-react";
import * as S from "./ProfilePage.styles";

export default function Profile() {
  const { user } = useAuthStore();
  const logoutMutation = useLogoutMutation();

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  if (!user) {
    return (
      <S.ProfileWrapper style={{ position: 'relative' }}>
        <div 
          className="container" 
          style={{ 
            position: 'absolute', 
            top: '4rem', 
            left: 0, 
            right: 0, 
            zIndex: 10 
          }}
        >
          <S.BackButton to={ROUTES.HOME}>
            <ArrowLeft size={16} /> Continue Shopping
          </S.BackButton>
        </div>
        <GuestProfile />
      </S.ProfileWrapper>
    );
  }

  return (
    <S.ProfileWrapper>
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <div style={{ marginBottom: '1rem' }}>
          <S.BackButton to={ROUTES.HOME}>
            <ArrowLeft size={16} /> Continue Shopping
          </S.BackButton>
        </div>
        <S.ContentArea>
          <S.ProfileCard>
            <UserInfo user={user} />
            <ProfileActions onLogout={handleLogout} />
          </S.ProfileCard>
        </S.ContentArea>
      </div>
    </S.ProfileWrapper>
  );
}
