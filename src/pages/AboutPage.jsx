import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Button from "../shared/components/Button";
import {
  PageWrapper,
  ContentContainer,
  PageTitle,
  Section,
  SectionTitle,
  Description,
  FeatureList,
  FeatureItem,
  TechStack,
  TechCategory,
  TechTitle,
  TechList,
  TechItem,
  LinkSection,
  DropdownButton,
  CollapsibleContent,
  BackLink,
} from "./AboutPage.styles";

const AboutPage = () => {
  const navigate = useNavigate();
  const [showFrontendDeps, setShowFrontendDeps] = useState(false);
  const [showBackendDeps, setShowBackendDeps] = useState(false);

  const frontendDependencies = [
    "@emotion/react",
    "@emotion/styled",
    "firebase",
    "react-query",
    "react-hook-form",
    "zod",
    "sonner",
    "lucide-react",
    "razorpay",
  ];

  const backendDependencies = [
    "joi",
    "express",
    "cors",
    "helmet",
    "express-rate-limit",
    "cloudinary",
    "mongoose",
    "firebase-admin",
    "razorpay",
    "multer",
    "dotenv",
    "nodemailer",
  ];

  return (
    <PageWrapper>
      <ContentContainer>
        <BackLink onClick={() => navigate(-1)}>
          <ArrowLeft size={14} /> Back
        </BackLink>
        <PageTitle>About eKart</PageTitle>

        <Section>
          <Description>
            This is a full-stack e-commerce application built to demonstrate a
            complete order workflow including authentication, cart management,
            checkout, payment integration and admin product management.
          </Description>
        </Section>

        <Section>
          <SectionTitle>Features</SectionTitle>
          <FeatureList>
            <FeatureItem>User authentication and authorization</FeatureItem>
            <FeatureItem>Product management</FeatureItem>
            <FeatureItem>Cart and Checkout</FeatureItem>
            <FeatureItem>Razorpay payment integration</FeatureItem>
            <FeatureItem>Order History</FeatureItem>
            <FeatureItem>
              Admin Panel for product and order management
            </FeatureItem>
          </FeatureList>
        </Section>

        <Section>
          <SectionTitle>Tech Stack</SectionTitle>
          <TechStack>
            <TechCategory>
              <TechTitle>Frontend</TechTitle>
              <Description style={{ marginBottom: "0.5rem" }}>
                React, Bootstrap, React Router
              </Description>
              <DropdownButton
                onClick={() => setShowFrontendDeps(!showFrontendDeps)}
              >
                {showFrontendDeps ? "Hide" : "Show all dependencies"}
              </DropdownButton>
              {showFrontendDeps && (
                <CollapsibleContent>
                  <TechList>
                    {frontendDependencies.map((dep) => (
                      <TechItem key={dep}>{dep}</TechItem>
                    ))}
                  </TechList>
                </CollapsibleContent>
              )}
            </TechCategory>

            <TechCategory>
              <TechTitle>Backend</TechTitle>
              <Description style={{ marginBottom: "0.5rem" }}>
                Node.js, Express, MongoDB (Mongoose)
              </Description>
              <DropdownButton
                onClick={() => setShowBackendDeps(!showBackendDeps)}
              >
                {showBackendDeps ? "Hide" : "Show all dependencies"}
              </DropdownButton>
              {showBackendDeps && (
                <CollapsibleContent>
                  <TechList>
                    {backendDependencies.map((dep) => (
                      <TechItem key={dep}>{dep}</TechItem>
                    ))}
                  </TechList>
                </CollapsibleContent>
              )}
            </TechCategory>
          </TechStack>

          <FeatureList>
            <FeatureItem>
              <strong>Payment Integration:</strong> Razorpay
            </FeatureItem>
            <FeatureItem>
              <strong>Authentication:</strong> Firebase Authentication
            </FeatureItem>
            <FeatureItem>
              <strong>Authorization:</strong> Role-based access control
            </FeatureItem>
          </FeatureList>
        </Section>

        <Section>
          <SectionTitle>About This Project</SectionTitle>
          <Description>
            I mainly built this project to learn about the complete order
            workflow, backend + frontend integration, payment integration,
            real-world architecture and best practices.
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
