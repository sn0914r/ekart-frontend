import styled from "@emotion/styled";

export const FullHeightContainer = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%;
  overflow: hidden;
`;

export const RowWrapper = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
`;

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  background: none;
  border: none;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0;
  transition: color 0.2s ease;

  &:hover {
    color: var(--text-primary);
  }
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: var(--bg-primary, #ffffff);
  min-height: 100vh;
  min-height: 100dvh;

  @media (max-width: 991px) {
    padding: 5rem 1.5rem 4rem;
  }
`;

export const HeaderOverlay = styled.div`
  position: absolute;
  top: 4rem;
  left: 0;
  right: 0;
  z-index: 10;

  @media (max-width: 991px) {
    top: 2rem;
  }
`;

export const FormContent = styled.div`
  width: 100%;
  max-width: 450px;
  animation: fadeIn 0.8s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  min-height: 400px;
  background-color: var(--bg-secondary, #f5f5f5);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
