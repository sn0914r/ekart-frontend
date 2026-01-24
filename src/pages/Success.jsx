import styled from "@emotion/styled";
import { CheckCircle, ArrowRight, ShoppingBag } from "lucide-react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useCartContext } from "../context/CartContext";
import { Navigate } from "react-router-dom";

const SuccessContainer = styled.section`
  padding: 12rem 0 8rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding-left: 2rem;
  padding-right: 2rem;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  color: #000;
  margin-bottom: 3rem;
  opacity: 0;
  transform: scale(0.8);
  animation: fadeInScale 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;

  @keyframes fadeInScale {
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Title = styled.h1`
  font-family: var(--font-serif);
  font-size: 4rem;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 4rem;
  max-width: 500px;
  line-height: 1.6;
`;

const OrderCard = styled.div`
  background-color: #f9f9f9;
  padding: 2.5rem 4rem;
  border: 1px solid #eeeeee;
  margin-bottom: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const OrderLabel = styled.span`
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 700;
  color: var(--text-secondary);
`;

const OrderId = styled.span`
  font-family: var(--font-sans);
  font-size: clamp(0.85rem, 2vw, 1.2rem);
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #000;
  word-break: break-all;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryBtn = styled(Link)`
  background-color: #000;
  color: #fff;
  text-decoration: none;
  padding: 1.2rem 2.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #222;
    transform: translateY(-2px);
  }
`;

const SecondaryBtn = styled(Link)`
  color: #000;
  text-decoration: none;
  padding: 1.2rem 2.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Success = () => {
  const location = useLocation();
  const details = location.state?.orderId;

  if (!details?.orderId) {
    return <Navigate to="/" />;
  }
  const { clearCart } = useCartContext();

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <SuccessContainer>
      <IconWrapper>
        <CheckCircle size={80} strokeWidth={1} />
      </IconWrapper>

      <Title>Thank You.</Title>
      <Subtitle>
        Your order has been received and is currently being processed by our
        archive team.
      </Subtitle>

      <OrderCard>
        <OrderLabel>Order Reference</OrderLabel>
        <OrderId>{details.orderId}</OrderId>
      </OrderCard>

      <ButtonGroup>
        <PrimaryBtn to="/">
          Continue Shopping <ArrowRight size={16} />
        </PrimaryBtn>
        <SecondaryBtn to="/orders">
          View My Orders <ShoppingBag size={16} />
        </SecondaryBtn>
      </ButtonGroup>
    </SuccessContainer>
  );
};

export default Success;
