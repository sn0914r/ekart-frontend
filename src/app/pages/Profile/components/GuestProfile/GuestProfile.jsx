import { ROUTES } from "@constants/routes";
import { ArrowRight } from "lucide-react";
import * as S from "./GuestProfile.styles";

const GuestProfile = () => {
  return (
    <S.ProfileCard>
      <S.UserName>Guest User</S.UserName>
      <S.UserEmail>Please Login to view your profile</S.UserEmail>
      <S.ProfileLink to={ROUTES.AUTH.LOGIN}>
        Login <ArrowRight size={16} />
      </S.ProfileLink>
    </S.ProfileCard>
  );
};

export default GuestProfile;
