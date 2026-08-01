import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  height: 100dvh;
  background-color: var(--color-dark-overlay-heavy, rgba(0, 0, 0, 0.4));
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

export const ModalContainer = styled.div`
  background: #ffffff;
  border: 1px solid #eee;
  border-radius: 4px;
  width: 100%;
  max-width: ${(props) => props.maxWidth || "500px"};
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  max-height: 90dvh;
  box-shadow: 0 4px 6px var(--color-shadow-soft);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
`;

export const ModalTitle = styled.h2`
  font-family: var(--font-serif);
  font-size: 1.5rem;
  margin: 0;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-error);
  }
`;

export const ModalBody = styled.div`
  padding: 1.5rem;
  overflow-y: auto;
  flex-grow: 1;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid #eee;
  background-color: #f9f9f9;
`;
