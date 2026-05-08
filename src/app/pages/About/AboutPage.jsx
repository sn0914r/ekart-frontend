import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Button from "@shared/components/Button/Button";
import * as S from "./AboutPage.styles";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <S.PageWrapper>
      <S.ContentContainer>
        <S.BackLink onClick={() => navigate(-1)}>
          <ArrowLeft size={14} /> Back
        </S.BackLink>
        <S.PageTitle>About eKart</S.PageTitle>

        <S.Section>
          <S.Description>
            A full-stack single-vendor e-commerce application with secure
            authentication, payment integration, and order lifecycle management.
          </S.Description>
        </S.Section>

        <S.Section>
          <S.SectionTitle>Highlights</S.SectionTitle>
          <S.FeatureList>
            <S.FeatureItem>
              Built backend using Node.js, Express, and MongoDB with REST API
              architecture
            </S.FeatureItem>
            <S.FeatureItem>
              Implemented authentication, role-based access control, and
              backend-only pricing logic
            </S.FeatureItem>
            <S.FeatureItem>
              Integrated Razorpay payments with signature verification and
              idempotency handling
            </S.FeatureItem>
            <S.FeatureItem>
              Designed order lifecycle management with stock handling and status
              validation
            </S.FeatureItem>
            <S.FeatureItem>
              Developed a React frontend and deployed live on Cloudflare Pages
            </S.FeatureItem>
          </S.FeatureList>
        </S.Section>

        <S.Section>
          <S.SectionTitle>Tech Stack</S.SectionTitle>
          <S.Description>
            Node.js, Express.js, MongoDB, React, Firebase Auth, Razorpay,
            Cloudinary
          </S.Description>
        </S.Section>

        <S.Section>
          <S.SectionTitle>Source Code</S.SectionTitle>
          <S.LinkSection>
            <Button
              as="a"
              href="https://github.com/sn0914r/ekart-frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend Repository
            </Button>
            <Button
              as="a"
              href="https://github.com/sn0914r/ekart-backend"
              target="_blank"
              rel="noopener noreferrer"
            >
              Backend Repository
            </Button>
          </S.LinkSection>
        </S.Section>
      </S.ContentContainer>
    </S.PageWrapper>
  );
};

export default AboutPage;
