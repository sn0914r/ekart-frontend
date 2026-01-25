import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { CheckCircle, XCircle, Info, Slash, X } from "lucide-react";

// --- Animations ---

const slideIn = keyframes`
  from { transform: translateX(120%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const slideOut = keyframes`
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(120%); opacity: 0; }
`;

const progress = keyframes`
  from { width: 100%; }
  to { width: 0%; }
`;

// --- Styled Components ---

const ToastWrapper = styled.div`
  position: fixed;
  top: 2rem;
  right: 2rem;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 380px;
  pointer-events: none;

  @media (max-width: 480px) {
    top: auto;
    bottom: 1.5rem;
    right: 1.5rem;
    left: 1.5rem;
    max-width: none;
  }
`;

const ToastItem = styled.div`
  background: #ffffff;
  color: #000000;
  padding: 1.25rem 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: start;
  gap: 1.25rem;
  position: relative;
  overflow: hidden;
  pointer-events: auto;
  animation: ${(props) => (props.isClosing ? slideOut : slideIn)} 0.6s
    cubic-bezier(0.19, 1, 0.22, 1) forwards;
  border-left: 4px solid ${(props) => props.color};
`;

const IconBox = styled.div`
  color: ${(props) => props.color};
  display: flex;
  margin-top: 2px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Title = styled.h4`
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0;
`;

const Message = styled.p`
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin: 0;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  color: #cccccc;
  transition: color 0.3s ease;
  display: flex;

  &:hover {
    color: #000000;
  }
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background-color: ${(props) => props.color};
  opacity: 0.6;
  animation: ${progress} 30s linear forwards;
`;

// --- Configuration ---

const TOAST_TYPES = {
  success: {
    title: "Success",
    color: "#10b981", // Emerald
    icon: <CheckCircle size={18} strokeWidth={2} />,
  },
  failure: {
    title: "Error",
    color: "#ef4444", // Red
    icon: <XCircle size={18} strokeWidth={2} />,
  },
  info: {
    title: "Info",
    color: "#3b82f6", // Blue
    icon: <Info size={18} strokeWidth={2} />,
  },
  rejected: {
    title: "Rejected",
    color: "#6b7280", // Gray
    icon: <Slash size={18} strokeWidth={2} />,
  },
};

/**
 * Individual Toast Component
 */
const Toast = ({ type = "info", message, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const config = TOAST_TYPES[type] || TOAST_TYPES.info;

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 30000); // 30s

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 6000); // Wait for slideOut animation
  };

  return (
    <ToastItem color={config.color} isClosing={isClosing}>
      <IconBox color={config.color}>{config.icon}</IconBox>
      <Content>
        <Title>{config.title}</Title>
        <Message>{message}</Message>
      </Content>
      <CloseBtn onClick={handleClose}>
        <X size={16} />
      </CloseBtn>
      <ProgressBar color={config.color} />
    </ToastItem>
  );
};

/**
 * Toast Container for multiple notifications
 * Example Usage:
 * const [toasts, setToasts] = useState([{ id: 1, type: 'success', message: 'Signed up!' }]);
 * <Toasts toasts={toasts} removeToast={(id) => ...} />
 */
const Toasts = ({ toasts = [], removeToast }) => {
  return (
    <ToastWrapper>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          type={toast.type}
          message={toast.message}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </ToastWrapper>
  );
};

export default Toasts;
