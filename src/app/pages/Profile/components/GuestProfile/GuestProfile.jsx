import { ROUTES } from "@constants/routes";
import { ArrowLeft, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import * as S from "./GuestProfile.styles";
import ProfileLayout from "../../layout/ProfileLayout";
import profileLayoutImage from "@assets/profile-layout.png";

const GuestProfile = () => {
  return (
    <ProfileLayout imageSrc={profileLayoutImage} imageAlt="Fashion collection">
      <S.IconWrapper>
        <User size={40} strokeWidth={1} />
      </S.IconWrapper>

      <S.Title>Welcome</S.Title>
      <S.Description>
        Log in or create an account to track your orders and save your wishlist.
      </S.Description>

      <S.ActionGroup>
        <S.ActionBtn as={Link} to={ROUTES.AUTH.LOGIN}>
          LOGIN TO YOUR ACCOUNT <ArrowRight size={16} />
        </S.ActionBtn>

        <S.ActionBtn variant="secondary" as={Link} to={ROUTES.AUTH.SIGNUP}>
          CREATE NEW ACCOUNT <ArrowRight size={16} />
        </S.ActionBtn>
      </S.ActionGroup>
    </ProfileLayout>
  );
};

export default GuestProfile;
