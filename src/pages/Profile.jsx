import styled from "@emotion/styled";
import { useAuthContext } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import { useNavigate, Link } from "react-router-dom";
import { User, LogOut, ArrowRight, ShoppingBag } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProfileWrapper = styled.section`
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

const ProfileCard = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const AvatarCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f9f9f9;
  border: 1px solid #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 3rem;
  color: #000;
`;

const UserName = styled.h1`
  font-family: var(--font-serif);
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
`;

const UserEmail = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 4rem;
`;

const ActionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const ProfileLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background-color: #fcfcfc;
  border: 1px solid #eeeeee;
  text-decoration: none;
  color: #000;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`;

const LogoutBtn = styled.button`
  width: 100%;
  background-color: #ff4d4d;
  color: #fff;
  border: none;
  padding: 1.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-top: 3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e04343;
    transform: translateY(-2px);
  }
`;

const Profile = () => {
  const { user, logout } = useAuthContext();
  const { addToast } = useToast();
  const navigate = useNavigate();
  const { role } = useAuthContext();

  const handleLogout = async () => {
    try {
      await logout();
      addToast("info", "Logged out successfully. See you again soon.");
      navigate("/");
    } catch (error) {
      addToast("failure", "Logout failed. Internal server error.");
    }
  };

  if (!user) {
    return (
      <ProfileWrapper>
        <ContentArea>
          <ProfileCard>
            <UserName>Guest User.</UserName>
            <UserEmail>Access Restricted</UserEmail>
            <ProfileLink to="/login">
              Login <ArrowRight size={16} />
            </ProfileLink>
          </ProfileCard>
        </ContentArea>
        <Footer />
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
              Order history <ShoppingBag size={16} strokeWidth={1.5} />
            </ProfileLink>
          </ActionList>

          {role === "admin" && (
            <ActionList style={{ marginTop: "1rem" }}>
              <ProfileLink to="/admin">
                Admin Panel <User size={16} strokeWidth={1.5} />
              </ProfileLink>
            </ActionList>
          )}

          <LogoutBtn onClick={handleLogout}>
            Logout <LogOut size={16} strokeWidth={2} />
          </LogoutBtn>
        </ProfileCard>
      </ContentArea>
      <Footer />
    </ProfileWrapper>
  );
};

export default Profile;
