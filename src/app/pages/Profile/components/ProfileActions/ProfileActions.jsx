import { ROUTES } from "@constants/routes";
import { ShoppingBag, LogOut } from "lucide-react";
import * as S from "./ProfileActions.styles";

const ProfileActions = ({ onLogout }) => {
  return (
    <>
      <S.ActionList>
        <S.ProfileLink to={ROUTES.ORDERS.LIST}>
          Order History <ShoppingBag size={16} strokeWidth={1.5} />
        </S.ProfileLink>
      </S.ActionList>

      <S.LogoutBtn onClick={onLogout}>
        Logout <LogOut size={16} strokeWidth={2} />
      </S.LogoutBtn>
    </>
  );
};

export default ProfileActions;
