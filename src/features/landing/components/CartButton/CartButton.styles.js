import styled from "@emotion/styled";

export const CartStrip = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3.5rem;
  background-color: #000;
  color: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  cursor: pointer;
  transform: translateY(100%);
  transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 10;
  padding-bottom: 0.5rem; /* Optical balance */

  /* ${Card}:hover & {
    transform: translateY(0);
  } */

  &:hover {
    background-color: #1a1a1a;
  }
`;

export const ActionText = styled.span`
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  opacity: 0.9;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.4s ease;
  transform: ${(props) => (props.isRotated ? "rotate(180deg)" : "rotate(0)")};
`;