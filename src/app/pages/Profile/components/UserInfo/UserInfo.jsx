import { User } from "lucide-react";
import * as S from "./UserInfo.styles";

const UserInfo = ({ user }) => {
  return (
    <>
      <S.AvatarCircle>
        <User size={40} strokeWidth={1} />
      </S.AvatarCircle>

      <S.UserName>{user.name || "Member"}</S.UserName>
      <S.UserEmail>{user.email}</S.UserEmail>
    </>
  );
};

export default UserInfo;
