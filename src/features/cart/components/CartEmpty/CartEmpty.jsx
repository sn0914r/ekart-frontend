import { Link } from "react-router-dom";
import * as S from "./CartEmpty.styles";

const CartEmpty = () => {
  return (
    <div className="container">
      <S.EmptyContainer>
        <h2>Your Bag is Empty</h2>
        <p>Looks like you haven't added any items yet.</p>
        <Link to="/">Start Shopping</Link>
      </S.EmptyContainer>
    </div>
  );
};

export default CartEmpty;
