import styled from "@emotion/styled";

export const FullHeightContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ImageWrapper = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-primary, #ffffff);
  padding: 2rem;

  @media (max-width: 991px) {
    padding: 4rem 1.5rem;
  }
`;

export const InnerContent = styled.div`
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
