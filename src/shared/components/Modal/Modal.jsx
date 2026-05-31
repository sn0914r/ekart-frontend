import { useEffect } from "react";
import { X } from "lucide-react";
import Portal from "../../../utils/Portal";

import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  ModalBody,
  ModalFooter,
} from "./Modal.styles";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  maxWidth,
  hideCloseButton,
}) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Portal wrapperId="ekart-modal-portal">
      <ModalOverlay onClick={handleOverlayClick}>
        <ModalContainer maxWidth={maxWidth}>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            {!hideCloseButton && (
              <CloseButton onClick={onClose} aria-label="Close modal">
                <X size={24} />
              </CloseButton>
            )}
          </ModalHeader>

          <ModalBody>{children}</ModalBody>

          {footer && <ModalFooter>{footer}</ModalFooter>}
        </ModalContainer>
      </ModalOverlay>
    </Portal>
  );
};

export default Modal;
