import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

import CartHooks from "../cart.hooks";
import CartItem from "../components/CartItem/CartItem";
import CartSummary from "../components/CartSummary/CartSummary";
import { PageWrapper, PageTitle, EmptyCartMessage } from "./CartPage.styles";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, isLoading, calculateTotal } = CartHooks.useCartData();

  const { mutate: increaseQty } = CartHooks.useIncreaseQty();
  const { mutate: decreaseQty } = CartHooks.useDecreaseQty();
  const { mutate: removeItem } = CartHooks.useRemoveItem();

  const handleIncrease = (productId) => increaseQty({ productId });
  const handleDecrease = (productId) => decreaseQty({ productId });
  const handleRemove = (productId) =>
    removeItem(
      { productId },
      {
        onSuccess: () => toast.info("Item removed from cart"),
        onError: (err) => toast.error(err.message || "Failed to remove item"),
      },
    );

  if (isLoading) {
    return (
      <PageWrapper>
        <div className="container">
          <EmptyCartMessage>
            <p>Loading your bag...</p>
          </EmptyCartMessage>
        </div>
      </PageWrapper>
    );
  }

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
  const shipping = 0;

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
                  key={item.productId}
                  item={item}
                  increaseQty={handleIncrease}
                  decreaseQty={handleDecrease}
                  removeFromCart={handleRemove}
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
