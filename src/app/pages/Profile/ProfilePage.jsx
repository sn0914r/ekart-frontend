import { ArrowLeft, ArrowRight, LogOut, ShoppingBag, User } from "lucide-react";

import { useAuthContext } from "@features/auth/AuthContext";
import AuthQuery from "@features/auth/auth.query";

import {
  ActionList,
  AvatarCircle,
  BackButton,
  ContentArea,
  LogoutBtn,
  ProfileCard,
  ProfileLink,
  ProfileWrapper,
  UserEmail,
  UserName,
} from "./ProfilePage.styles";

export default function Profile() {
  const { user, role } = useAuthContext();

  const logoutMutation = AuthQuery.useLogoutMutation();

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
        <BackButton to="/">
          <ArrowLeft size={16} /> Back to Home
        </BackButton>
        <ProfileCard>
          <AvatarCircle>
            <User size={40} strokeWidth={1} />
          </AvatarCircle>

          <UserName>{user.displayName || "Member"}</UserName>
          <UserEmail>{user.email}</UserEmail>

          {role !== "admin" && (
            <ActionList>
              <ProfileLink to="/orders">
                Order History <ShoppingBag size={16} strokeWidth={1.5} />
              </ProfileLink>
            </ActionList>
          )}

          {role === "admin" && (
            <ActionList>
              <ProfileLink to="/admin/dashboard">
                Admin Dashboard <ShoppingBag size={16} strokeWidth={1.5} />
              </ProfileLink>
            </ActionList>
          )}

          <LogoutBtn onClick={handleLogout}>
            Logout <LogOut size={16} strokeWidth={2} />
          </LogoutBtn>
        </ProfileCard>
      </ContentArea>
    </ProfileWrapper>
  );
}
