import styled from "@emotion/styled";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--bg-primary);
  height: 100%;

  @media (max-width: 575px) {
    // padding: 0.75rem;
    gap: 0.75rem;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;
  position: relative;
  border-radius: 4px;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RemoveButtonWrapper = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 10;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0,0,0,0.15);
  color: var(--color-error);
  transition: transform 0.2s, background 0.2s;

  &:hover {
    transform: scale(1.1);
    background: #ffffff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  flex: 1;

  @media (max-width: 575px) {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    gap: 0.25rem;
  }
`;

export const ItemName = styled.h3`
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 575px) {
    font-size: 0.875rem;
  }
`;

export const ItemPrice = styled.p`
  font-weight: 600;
  margin: 0;

  @media (max-width: 575px) {
    font-size: 0.875rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  margin-top: auto;
`;

export const ActionButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border: var(--border-fine);
  background: ${(props) => (props.primary ? "var(--color-black)" : "transparent")};
  color: ${(props) => (props.primary ? "var(--text-on-dark)" : "var(--text-primary)")};
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s;

  @media (max-width: 575px) {
    padding: 0.5rem;
    font-size: 0.8125rem;
  }

  &:hover {
    background: ${(props) => (props.primary ? "var(--color-black-hover)" : "var(--color-input-focus-bg)")};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
