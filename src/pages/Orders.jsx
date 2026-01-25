import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { ordersApi } from "../api/orders.api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Error from "../components/Error";
import OrderCard from "../components/OrderCard";
import { Link } from "react-router-dom";

const PageWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const ContentArea = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 10rem 2rem 6rem;
  flex: 1;
`;

const Header = styled.div`
  margin-bottom: 5rem;
  text-align: left;
`;

const Title = styled.h1`
  font-family: var(--font-serif);
  font-size: 3.5rem;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 600;
`;

const OrdersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 8rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ShopLink = styled(Link)`
  background: #000;
  color: #fff;
  text-decoration: none;
  padding: 1.2rem 3rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  transition: all 0.3s ease;

  &:hover {
    background: #222;
    transform: translateY(-2px);
  }
`;

const Orders = () => {
  const { user } = useAuthContext();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchOrders = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await ordersApi.getUserOrders();
      setOrders(data);
      console.log(data);
    } catch (err) {
      setError(err.message || "Failed to retrieve archive history.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  if (!user) {
    return (
      <PageWrapper>
        <ContentArea>
          <EmptyState>
            <Title>History Restricted.</Title>
            <Subtitle>
              Please establish a membership to view your archive selections.
            </Subtitle>
            <ShopLink to="/login">Login to Archive</ShopLink>
          </EmptyState>
        </ContentArea>
        <Footer />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <ContentArea>
        <Header>
          <Subtitle>Your Archive History</Subtitle>
          <Title>Selections.</Title>
        </Header>

        {loading ? (
          <Loader />
        ) : error ? (
          <Error message={error} onRetry={fetchOrders} />
        ) : orders.length === 0 ? (
          <EmptyState>
            <Subtitle>
              You haven't established any archive selections yet.
            </Subtitle>
            <ShopLink to="/">Explore Collection</ShopLink>
          </EmptyState>
        ) : (
          <OrdersList>
            {orders.map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </OrdersList>
        )}
      </ContentArea>
      <Footer />
    </PageWrapper>
  );
};

export default Orders;
