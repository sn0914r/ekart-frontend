import styled from "@emotion/styled";
import { useCartContext } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import paymentsApi from "../api/payments.api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "../context/ToastContext";
import { auth } from "../configs/firebase";

const CartContainer = styled.section`
  padding: 10rem 0 6rem;
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  min-height: 80vh;

  @media (max-width: 768px) {
    padding: 8rem 1.5rem 4rem;
  }
`;

const Title = styled.h1`
  font-family: var(--font-serif);
  font-size: 3.5rem;
  margin-bottom: 4rem;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const CartGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 6rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Summary = styled.div`
  background-color: #fcfcfc;
  padding: 3rem;
  height: fit-content;
  position: sticky;
  top: 10rem;

  @media (max-width: 768px) {
    padding: 2rem;
    position: static;
  }
`;

const SummaryTitle = styled.h2`
  font-family: var(--font-sans);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 700;
  margin-bottom: 2.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #000;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: ${(props) =>
    props.bold ? "var(--text-primary)" : "var(--text-secondary)"};
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  border-top: ${(props) => (props.total ? "1px solid #eeeeee" : "none")};
  padding-top: ${(props) => (props.total ? "1.5rem" : "0")};
  margin-top: ${(props) => (props.total ? "1.5rem" : "0")};
`;

const CheckoutBtn = styled.button`
  width: 100%;
  background-color: #000;
  color: #fff;
  border: none;
  padding: 1.2rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-top: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #222;
    transform: translateY(-2px);
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ShopLink = styled(Link)`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 700;
  color: #000;
  text-decoration: none;
  border-bottom: 2px solid #000;
  padding-bottom: 0.2rem;
  &:hover {
    opacity: 0.6;
  }
`;

const Cart = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const { cartItems, increaseQty, decreaseQty, removeFromCart, totalPrice } =
    useCartContext();
  const { addToast } = useToast();
  const navigate = useNavigate();
  const subtotal = totalPrice();
  const shipping = subtotal > 0 ? 500 : 0; // Fixed shipping for demo
  const total = subtotal + shipping;

  const RAZORPAY_TEST_API_KEY = "rzp_test_S1HTg3qd801pNt";

  const handleCheckout = async () => {
    try {
      // Checking authentication
      if (!auth.currentUser) {
        addToast("error", "Please login to proceed");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
        return;
      }

      setIsProcessing(true);
      const data = cartItems.map((item) => ({
        id: item.id,
        quantity: item.qty,
      }));

      // Create order at backend
      const order = await paymentsApi.createPaymentIntent(data);

      // Razorpay checkout options
      const options = {
        key: RAZORPAY_TEST_API_KEY,
        amount: order.amount,
        currency: order.currency,
        name: "eKart",
        description: "Order Payment",
        order_id: order.id,
        handler: async function (response) {
          // Verify payment in backend
          const orderId = await paymentsApi.createOrder({
            items: data,
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
          });

          if (orderId) {
            addToast("success", "Payment Successful");
            navigate("/payment-success", { state: { orderId } });
          } else {
            addToast("error", "Payment Failed");
          }
          setIsProcessing(false);
        },
        // theme: { color: "#0d6efd" },
        theme: { color: "red" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      addToast("error", error.message || "Payment Failed");
      setIsProcessing(false);
    }
  };
  return (
    <>
      <CartContainer>
        <Title>Shopping Bag</Title>

        {cartItems.length === 0 ? (
          <EmptyCart>
            <p style={{ color: "var(--text-secondary)" }}>
              Your bag is currently empty.
            </p>
            <ShopLink to="/">Continue Shopping</ShopLink>
          </EmptyCart>
        ) : (
          <CartGrid>
            <ItemsList>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  increaseQty={increaseQty}
                  decreaseQty={decreaseQty}
                  removeFromCart={removeFromCart}
                />
              ))}
            </ItemsList>

            <Summary>
              <SummaryTitle>Order Summary</SummaryTitle>
              <SummaryRow>
                <span>Subtotal</span>
                <span>₨ {subtotal.toLocaleString()}</span>
              </SummaryRow>
              <SummaryRow>
                <span>Shipping</span>
                <span>₨ {shipping.toLocaleString()}</span>
              </SummaryRow>
              <SummaryRow bold total totalValue={total}>
                <span>Total</span>
                <span>₨ {total.toLocaleString()}</span>
              </SummaryRow>
              <CheckoutBtn onClick={handleCheckout} disabled={isProcessing}>
                {isProcessing ? "Processing..." : "Checkout"}{" "}
                <ArrowRight size={16} />
              </CheckoutBtn>
            </Summary>
          </CartGrid>
        )}
      </CartContainer>
      <Footer />
    </>
  );
};

export default Cart;
