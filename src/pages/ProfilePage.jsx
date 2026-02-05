import { ArrowRight, LogOut, ShoppingBag, User } from "lucide-react";
import { useAuthContext } from "../auth/AuthContext";
import AuthQuery from "../auth/auth.query";
import {
  ActionList,
  AvatarCircle,
  ContentArea,
  LogoutBtn,
  ProfileCard,
  ProfileLink,
  ProfileWrapper,
  UserEmail,
  UserName,
} from "./ProfilePage.styles";

const Profile = () => {
  const { user } = useAuthContext();

  const logoutMutation = AuthQuery.useLogout();

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  if (!user) {
    return (
      <ProfileWrapper>
        <ContentArea>
          <ProfileCard>
            <UserName>Guest User</UserName>
            <UserEmail>Please Login to view your profile</UserEmail>
            <ProfileLink to="/auth/login">
              Login <ArrowRight size={16} />
            </ProfileLink>
          </ProfileCard>
        </ContentArea>
      </ProfileWrapper>
    );
  }

  return (
    <ProfileWrapper>
      <ContentArea>
        <ProfileCard>
          <AvatarCircle>
            <User size={40} strokeWidth={1} />
          </AvatarCircle>

          <UserName>{user.displayName || "Member"}</UserName>
          <UserEmail>{user.email}</UserEmail>

          <ActionList>
            <ProfileLink to="/orders">
              Order History <ShoppingBag size={16} strokeWidth={1.5} />
            </ProfileLink>
          </ActionList>

          <LogoutBtn onClick={handleLogout}>
            Logout <LogOut size={16} strokeWidth={2} />
          </LogoutBtn>
        </ProfileCard>
      </ContentArea>
    </ProfileWrapper>
  );
};

export default Profile