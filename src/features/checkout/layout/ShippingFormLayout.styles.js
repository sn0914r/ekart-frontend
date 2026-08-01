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

export const ImageWrapper = styled.div`
  height: 100vh;
  height: 100dvh;
  width: 100%;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1); /* Subtle overlay */
  }
`;

export const FormSection = styled.div`
  height: 100vh;
  height: 100dvh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-primary);
  padding: 2rem;

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
  min-height: 100dvh;
    padding: 4rem 1.5rem;
  }
`;

export const FormContent = styled.div`
  width: 100%;
  max-width: 440px;
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
