import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFoundWrapper = styled.section`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
`;

const ErrorCode = styled.h1`
  font-family: var(--font-serif);
  font-size: 15vw;
  line-height: 0.8;
  margin: 0;
  letter-spacing: -0.05em;
  color: #eeeeee;
  position: absolute;
  z-index: 1;
  user-select: none;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Message = styled.h2`
  font-family: var(--font-serif);
  font-size: 3rem;
  letter-spacing: -0.02em;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  max-width: 400px;
  line-height: 1.6;
`;

const BackBtn = styled(Link)`
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
  margin-top: 2rem;

  &:hover {
    background-color: #222;
    transform: translateY(-2px);
  }
`;

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <ErrorCode>404</ErrorCode>
      <Content>
        <Message>Page Not Found.</Message>
        <Description>
          The piece you are looking for has been archived or removed from the
          current collection.
        </Description>
        <BackBtn to="/">
          <ArrowLeft size={16} /> Back to the Shop
        </BackBtn>
      </Content>
    </NotFoundWrapper>
  );
};

export default NotFound;
