import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import CartItem from "../components/CartItem/CartItem";
import CartSummary from "../components/CartSummary/CartSummary";
import { PageWrapper, PageTitle, EmptyCartMessage } from "./CartPage.styles";
import { useCartContext } from "../CartContext";

const CartPage = () => {
  const navigate = useNavigate();
  const {
    increaseQty,
    decreaseQty,
    cartItems,
    calculateTotal,
    removeFromCart,
  } = useCartContext();

  if (!cartItems || cartItems.length === 0) {
    return (
      <PageWrapper>
        <div className="container">
          <EmptyCartMessage>
            <h2>Your Bag is Empty</h2>
            <p>Looks like you haven't added any items yet.</p>
            <Link to="/">Start Shopping</Link>
          </EmptyCartMessage>
        </div>
      </PageWrapper>
    );
  }

  const subtotal = calculateTotal();
  const shipping = 100;

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <PageWrapper>
      <div className="container">
        <div className="d-flex align-items-center mb-4">
          <Link
            to="/"
            className="text-decoration-none text-muted d-flex align-items-center gap-2 small text-uppercase"
          >
            <ArrowLeft size={16} /> Continue Shopping
          </Link>
        </div>

        <PageTitle>Shopping Bag ({cartItems.length})</PageTitle>

        <div className="row g-5">
          {/* Cart Items List */}
          <div className="col-12 col-lg-8">
            <div className="d-flex flex-column gap-3">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  increaseQty={increaseQty}
                  decreaseQty={decreaseQty}
                  removeFromCart={removeFromCart}
                />
              ))}
            </div>
          </div>

          {/* Cart Summary Sidebar */}
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
    </PageWrapper>
  );
};

export default CartPage;
