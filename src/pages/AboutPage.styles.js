import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  padding: 4rem 0;
  min-height: 80vh;
  background-color: #fafafa;
`;

export const ContentContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const PageTitle = styled.h1`
  font-family: var(--font-serif);
  font-size: 2.5rem;
  margin: 0 0 2rem 0;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  color: var(--text-primary);
`;

export const Section = styled.section`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-serif);
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: var(--text-primary);
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
`;

export const FeatureItem = styled.li`
  font-size: 0.95rem;
  color: var(--text-secondary);
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: "•";
    position: absolute;
    left: 0;
    font-weight: bold;
    color: var(--text-primary);
  }
`;

export const TechStack = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  align-items: start;
`;

export const TechCategory = styled.div`
  background-color: #fafafa;
  padding: 1.5rem;
  border-left: 3px solid #000000;
`;

export const TechTitle = styled.h3`
  font-family: var(--font-serif);
  font-size: 1.1rem;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-primary);
`;

export const TechList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TechItem = styled.li`
  font-size: 0.85rem;
  color: var(--text-secondary);
  padding: 0.25rem 0;
`;

export const LinkSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const DropdownButton = styled.button`
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  padding: 0.5rem 0;
  margin-top: 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: #333333;
  }
`;

export const CollapsibleContent = styled.div`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
  animation: slideDown 0.3s ease-out;
  overflow: hidden;

  @keyframes slideDown {
    from {
      opacity: 0;
      max-height: 0;
      padding-top: 0;
      margin-top: 0;
    }
    to {
      opacity: 1;
      max-height: 500px;
      padding-top: 1rem;
      margin-top: 1rem;
    }
  }
`;

export const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary, #666666);
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s ease;
  margin-bottom: 1.5rem;

  &:hover {
    color: #000000;
  }
`;
