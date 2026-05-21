import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  padding: 4rem 0;
  min-height: 90vh;
  background-color: var(--bg-primary);
  opacity: 0;
  animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

export const BackLink = styled.button`
  background: none;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-loose, 0.1em);
  color: var(--text-primary);
  cursor: pointer;
  padding: 0.5rem 0;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--color-black);
    transition: width 0.3s ease;
  }

  &:hover {
    transform: translateX(-4px);
    &::after {
      width: 100%;
    }
  }
`;

export const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  border-bottom: var(--border-fine);
  padding-bottom: 3.5rem;
`;

export const SuperTitle = styled.span`
  font-family: var(--font-sans);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-loose, 0.1em);
  color: var(--text-primary);
  opacity: 0.5;
  display: block;
  margin-bottom: 0.5rem;
`;

export const MainTitle = styled.h1`
  font-family: var(--font-serif);
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
`;

export const Tagline = styled.div`
  font-family: var(--font-sans);
  font-size: 1.1rem;
  color: var(--text-secondary);
  opacity: 0.75;
  max-width: 660px;
  margin: 0 auto;
  line-height: 1.7;

  p {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Section = styled.section`
  margin-bottom: 5rem;
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-serif);
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 2.5rem;
  position: relative;
`;

export const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
`;

export const HighlightCard = styled.div`
  background-color: var(--color-subtle-bg);
  border: var(--border-fine);
  padding: 2.5rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px var(--color-shadow-soft);
    border-color: var(--color-black);
  }
`;

export const IconWrapper = styled.div`
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background-color: var(--bg-primary);
  border: var(--border-fine);
`;

export const CardTitle = styled.h3`
  font-family: var(--font-serif);
  font-size: 1.35rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

export const HighlightList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const HighlightItem = styled.li`
  font-family: var(--font-sans);
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--text-secondary);
  padding-left: 1.25rem;
  position: relative;

  &::before {
    content: "—";
    position: absolute;
    left: 0;
    color: var(--color-muted);
  }
`;

export const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const SpecsCard = styled.div`
  border: var(--border-fine);
  border-top: var(--border-dark);
  padding: 2rem;
  background-color: var(--bg-primary);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 5px 15px var(--color-shadow-soft);
  }
`;

export const SpecsCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-divider);
  padding-bottom: 0.75rem;
`;

export const SpecsCardTitle = styled.h4`
  font-family: var(--font-serif);
  font-size: 1.25rem;
  color: var(--text-primary);
  margin: 0;
`;

export const SpecsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const SpecsItem = styled.li`
  font-family: var(--font-sans);
  font-size: 0.9rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "•";
    color: var(--color-muted);
  }
`;

export const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

export const RepoCard = styled.div`
  background-color: var(--bg-primary);
  border: var(--border-fine);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 280px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background-color: var(--color-subtle-bg);
    transform: translateY(-5px);
    box-shadow: 0 10px 25px var(--color-shadow-soft);
  }
`;

export const RepoHeader = styled.div`
  margin-bottom: 1.5rem;
`;

export const RepoMeta = styled.span`
  font-family: var(--font-sans);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-loose, 0.1em);
  color: var(--text-primary);
  opacity: 0.5;
  display: block;
  margin-bottom: 0.5rem;
`;

export const RepoName = styled.h3`
  font-family: var(--font-serif);
  font-size: 1.5rem;
  color: var(--text-primary);
  margin: 0 0 1rem 0;
`;

export const RepoDesc = styled.p`
  font-family: var(--font-sans);
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--text-secondary);
  margin: 0;
`;

export const RepoFooter = styled.div`
  margin-top: 1.5rem;
`;

export const InlineIcon = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 0.375rem;
`;

export const VisionBlock = styled.div`
  background-color: var(--color-subtle-bg);
  border: var(--border-fine);
  padding: 2.25rem 3rem;
  text-align: center;
`;

export const VisionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
`;

export const VisionItem = styled.li`
  font-family: var(--font-serif);
  font-size: 1.25rem;
  line-height: 1.35;
  color: var(--text-primary);
  position: relative;
  padding-left: 1.75rem;

  &::before {
    content: "—";
    position: absolute;
    left: 0;
    color: var(--text-primary);
    opacity: 0.5;
  }
`;
