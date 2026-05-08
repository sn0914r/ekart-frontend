import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/ui/useCart";
import CartHeader from "../components/CartHeader/CartHeader";
import CartItemList from "../components/CartItemList/CartItemList";
import CartSummary from "../components/CartSummary/CartSummary";
import CartLoading from "../components/CartLoading/CartLoading";
import CartEmpty from "../components/CartEmpty/CartEmpty";
import * as S from "./CartPage.styles";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, isLoading, calculateTotal } = useCart();

  if (isLoading) {
    return (
      <S.PageWrapper>
        <CartLoading />
      </S.PageWrapper>
    );
  }

  if (!cartItems || cartItems.length === 0) {
    return (
      <S.PageWrapper>
        <CartEmpty />
      </S.PageWrapper>
    );
  }

  const subtotal = calculateTotal();
  const shipping = 0;

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <S.PageWrapper>
      <div className="container">
        <CartHeader />

        <S.PageTitle>Shopping Bag ({cartItems.length})</S.PageTitle>

        <div className="row g-5">
          <div className="col-12 col-lg-8">
            <CartItemList items={cartItems} />
          </div>

          <div className="col-12 col-lg-4">
            <div className="sticky-top" style={{ top: "2rem", zIndex: 1 }}>
              <CartSummary
                subtotal={subtotal}
                shipping={shipping}
                handleCheckout={handleCheckout}
              />
            </div>
          </div>
        </div>
      </div>
    </S.PageWrapper>
  );
};

export default CartPage;
