import styled from "@emotion/styled";

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  width: 100%;
  align-items: flex-start;

  @media (max-width: 991px) {
    flex-direction: column-reverse;
  }
`;

export const MainImageWrapper = styled.div`
  flex: 1;
  aspect-ratio: 3 / 4;
  background: var(--bg-secondary, #f9f9f9);
  border-radius: 4px;
  overflow: hidden;
  position: relative;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
`;

export const ThumbnailList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80px;

  @media (max-width: 991px) {
    flex-direction: row;
    width: 100%;
    overflow-x: auto;
    padding-bottom: 0.5rem;

    /* Hide scrollbar for clean look */
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const Thumbnail = styled.img`
  width: 80px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid ${(props) => (props.active ? "var(--color-black, #000)" : "transparent")};
  box-shadow: ${(props) => (props.active ? "0 4px 8px rgba(0, 0, 0, 0.15)" : "none")};
  opacity: ${(props) => (props.active ? 1 : 0.6)};
  transition: all 0.2s ease;

  @media (max-width: 576px) {
    width: 60px;
    height: 80px;
  }

  &:hover {
    opacity: 1;
  }
`;
