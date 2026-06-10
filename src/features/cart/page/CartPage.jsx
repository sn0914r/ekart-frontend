import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/ui/useCart";
import CartHeader from "../components/CartHeader/CartHeader";
import CartItemList from "../components/CartItemList/CartItemList";
import CartSummary from "../components/CartSummary/CartSummary";
import CartEmpty from "../components/CartEmpty/CartEmpty";
import * as S from "./CartPage.styles";
import Loader from "@shared/components/Loader/Loader";
import AuthPrompt from "@shared/components/AuthPrompt";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, isLoading, calculateTotal, isAuthenticated } = useCart();

  if (!isAuthenticated) {
    return (
      <S.PageWrapper>
        <div className="container">
          <AuthPrompt
            title="Please Login"
            message="You need to be logged in to view your cart."
          />
        </div>
      </S.PageWrapper>
    );
  }

  if (isLoading) {
    return (
      <S.PageWrapper>
        <Loader />
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

        <S.PageTitle>Shopping Cart ({cartItems.length})</S.PageTitle>

        <div className="row g-5">
          <div className="col-12 col-lg-8">
            <CartItemList items={cartItems} />
          </div>

          <div className="col-12 col-lg-4">
            <CartSummary
              subtotal={subtotal}
              shipping={shipping}
              handleCheckout={handleCheckout}
            />
          </div>
        </div>
      </div>
    </S.PageWrapper>
  );
};

export default CartPage;
