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
      <S.ProfileWrapper>
        <S.ContentArea>
          <GuestProfile />
        </S.ContentArea>
      </S.ProfileWrapper>
    );
  }

  return (
    <S.ProfileWrapper>
      <S.ContentArea>
        <S.BackButton to={ROUTES.HOME}>
          <ArrowLeft size={16} /> Back to Home
        </S.BackButton>
        <S.ProfileCard>
          <UserInfo user={user} />
          <ProfileActions onLogout={handleLogout} />
        </S.ProfileCard>
      </S.ContentArea>
    </S.ProfileWrapper>
  );
}
