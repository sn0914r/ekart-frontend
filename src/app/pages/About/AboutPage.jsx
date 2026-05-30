import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CreditCard,
  Lock,
  ShoppingBag,
  RefreshCw,
  Code,
  Database,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import Button from "@shared/components/Button/Button";
import * as S from "./AboutPage.styles";

const AboutPage = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      icon: <CreditCard size={22} />,
      title: "Secure Payment Architecture",
      items: [
        "Backend-calculated checkout pricing",
        "Razorpay order creation on the server",
        "Payment signature verification before database persistence",
        "Secure order lifecycle handling",
      ],
    },
    {
      icon: <Lock size={22} />,
      title: "Authentication & Session Flow",
      items: [
        "JWT access and refresh token architecture",
        "Secure cookie-based session handling",
        "Automatic token refresh workflows",
        "Protected route and admin access systems",
      ],
    },
    {
      icon: <ShoppingBag size={22} />,
      title: "Inventory & Cart Management",
      items: [
        "Database-synced cart validation",
        "Stock-aware checkout protection",
        "Persistent wishlist and cart state",
        "Dynamic product filtering and search systems",
      ],
    },
    {
      icon: <RefreshCw size={22} />,
      title: "Scalable Frontend State",
      items: [
        "Centralized API request layer",
        "Server-state caching and synchronization",
        "Global state management architecture",
        "Standardized API error normalization",
      ],
    },
  ];

  const architecture = [
    {
      icon: <Code size={18} />,
      title: "Frontend",
      items: [
        "React.js frontend architecture",
        "Zustand state management",
        "TanStack Query server-state synchronization",
        "Modular component architecture",
      ],
    },
    {
      icon: <Database size={18} />,
      title: "Backend",
      items: [
        "Node.js + Express",
        "REST API architecture",
        "JWT authentication flows",
        "Razorpay payment integration",
        "Database-driven business logic",
      ],
    },
    {
      icon: <ShieldCheck size={18} />,
      title: "Security & Validation",
      items: [
        "Role-based access control",
        "Protected admin routes",
        "Request payload validation",
        "Secure checkout verification systems",
      ],
    },
  ];

  const repos = [
    {
      meta: "Storefront UI",
      name: "eKart Frontend",
      desc: "Responsive ecommerce storefront with authentication, cart systems, product discovery, and checkout flows.",
      link: "https://github.com/sn0914r/ekart-frontend",
      id: "repo-frontend-link",
    },
    {
      meta: "BACKEND API",
      name: "eKart Backend",
      desc: "REST API handling JWT authentication, Razorpay payment verification, inventory validation, and order processing.",
      link: "https://github.com/sn0914r/ekart-backend",
      id: "repo-backend-link",
    },
    {
      meta: "Admin Panel",
      name: "eKart Admin Panel",
      desc: "Administrative dashboard for product management, order monitoring, inventory control, and protected operations.",
      link: "https://github.com/sn0914r/ekart-admin-dashboard",
      id: "repo-admin-link",
    },
  ];

  return (
    <S.PageWrapper>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <S.BackLink id="about-back-link" onClick={() => navigate(-1)}>
              <ArrowLeft size={14} /> Back
            </S.BackLink>

            <S.HeroSection>
              <S.SuperTitle>Production-Style E-Commerce Platform</S.SuperTitle>
              <S.MainTitle>About eKart</S.MainTitle>
              <S.Tagline>
                <p>
                  eKart is a ecommerce platform focused on secure payment architecture,
                  JWT-based session management, inventory-aware cart systems, and scalable
                  frontend/backend separation.
                </p>
                <p>
                  Built to simulate real-world commerce workflows including authentication,
                  checkout verification, protected admin operations, and persistent user state
                  management.
                </p>
              </S.Tagline>
            </S.HeroSection>

            <S.Section>
              <S.SectionTitle>Engineering Highlights</S.SectionTitle>
              <S.HighlightGrid>
                {highlights.map((highlight, idx) => (
                  <S.HighlightCard key={idx}>
                    <S.IconWrapper>{highlight.icon}</S.IconWrapper>
                    <S.CardTitle>{highlight.title}</S.CardTitle>
                    <S.HighlightList>
                      {highlight.items.map((item, itemIdx) => (
                        <S.HighlightItem key={itemIdx}>{item}</S.HighlightItem>
                      ))}
                    </S.HighlightList>
                  </S.HighlightCard>
                ))}
              </S.HighlightGrid>
            </S.Section>

            <S.Section>
              <S.SectionTitle>System Architecture</S.SectionTitle>
              <S.SpecsGrid>
                {architecture.map((arch, idx) => (
                  <S.SpecsCard key={idx}>
                    <S.SpecsCardHeader>
                      {arch.icon}
                      <S.SpecsCardTitle>{arch.title}</S.SpecsCardTitle>
                    </S.SpecsCardHeader>
                    <S.SpecsList>
                      {arch.items.map((item, itemIdx) => (
                        <S.SpecsItem key={itemIdx}>{item}</S.SpecsItem>
                      ))}
                    </S.SpecsList>
                  </S.SpecsCard>
                ))}
              </S.SpecsGrid>
            </S.Section>

            <S.Section>
              <S.SectionTitle>Codebases</S.SectionTitle>
              <S.RepoGrid>
                {repos.map((repo, idx) => (
                  <S.RepoCard key={idx}>
                    <S.RepoHeader>
                      <S.RepoMeta>{repo.meta}</S.RepoMeta>
                      <S.RepoName>{repo.name}</S.RepoName>
                      <S.RepoDesc>{repo.desc}</S.RepoDesc>
                    </S.RepoHeader>
                    <S.RepoFooter>
                      <Button
                        id={repo.id}
                        as="a"
                        href={repo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Repository <S.InlineIcon><ExternalLink size={12} /></S.InlineIcon>
                      </Button>
                    </S.RepoFooter>
                  </S.RepoCard>
                ))}
              </S.RepoGrid>
            </S.Section>

            <S.Section>
              <S.SectionTitle>Engineering Focus</S.SectionTitle>
              <S.VisionBlock>
                <S.VisionList>
                  <S.VisionItem>Secure checkout and payment validation</S.VisionItem>
                  <S.VisionItem>JWT session flows and protected admin systems</S.VisionItem>
                  <S.VisionItem>Reliable cart, inventory, and order handling</S.VisionItem>
                  <S.VisionItem>Clean frontend/backend separation for scalability</S.VisionItem>
                </S.VisionList>
              </S.VisionBlock>
            </S.Section>
          </div>
        </div>
      </div>
    </S.PageWrapper>
  );
};

export default AboutPage;
