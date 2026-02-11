import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContainer = styled.div`
  background-color: #ffffff;
  border: 2px solid #000000;
  max-width: 400px;
  width: 90%;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const ModalHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
`;

export const ModalTitle = styled.h3`
  font-family: var(--font-serif);
  font-size: 1.25rem;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  color: var(--text-primary);
`;

export const ModalBody = styled.div`
  padding: 1.5rem;
`;

export const ModalMessage = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0;
`;

export const ModalFooter = styled.div`
  padding: 1.5rem;
  border-top: 1px solid #e0e0e0;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

export const CancelButton = styled.button`
  background-color: #ffffff;
  color: #000000;
  border: 2px solid #000000;
  padding: 0.75rem 1.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ConfirmButton = styled.button`
  background-color: #ff4444;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #cc0000;
  }

  &:active {
    transform: scale(0.98);
  }
`;
