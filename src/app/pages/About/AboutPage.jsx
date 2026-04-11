import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Button from "@shared/components/Button/Button"
import {
  PageWrapper,
  ContentContainer,
  PageTitle,
  Section,
  SectionTitle,
  Description,
  FeatureList,
  FeatureItem,
  LinkSection,
  BackLink,
} from "./AboutPage.styles";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <ContentContainer>
        <BackLink onClick={() => navigate(-1)}>
          <ArrowLeft size={14} /> Back
        </BackLink>
        <PageTitle>About eKart</PageTitle>

        <Section>
          <Description>
            A full-stack single-vendor e-commerce application with secure
            authentication, payment integration, and order lifecycle management.
          </Description>
        </Section>

        <Section>
          <SectionTitle>Highlights</SectionTitle>
          <FeatureList>
            <FeatureItem>
              Built backend using Node.js, Express, and MongoDB with REST API
              architecture
            </FeatureItem>
            <FeatureItem>
              Implemented authentication, role-based access control, and
              backend-only pricing logic
            </FeatureItem>
            <FeatureItem>
              Integrated Razorpay payments with signature verification and
              idempotency handling
            </FeatureItem>
            <FeatureItem>
              Designed order lifecycle management with stock handling and status
              validation
            </FeatureItem>
            <FeatureItem>
              Developed a React frontend and deployed live on Cloudflare Pages
            </FeatureItem>
          </FeatureList>
        </Section>

        <Section>
          <SectionTitle>Tech Stack</SectionTitle>
          <Description>
            Node.js, Express.js, MongoDB, React, Firebase Auth, Razorpay,
            Cloudinary
          </Description>
        </Section>

        <Section>
          <SectionTitle>Source Code</SectionTitle>
          <LinkSection>
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
          </LinkSection>
        </Section>
      </ContentContainer>
    </PageWrapper>
  );
};

export default AboutPage;
