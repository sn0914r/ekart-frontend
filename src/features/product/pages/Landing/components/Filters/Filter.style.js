import styled from "@emotion/styled";

export const FilterWrapper = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  transition: all 0.3s ease;
`;

export const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

export const ToggleBtn = styled.button`
  background: none;
  border: none;
  font-family: var(--font-sans);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const CollapsibleContent = styled.div`
  overflow: hidden;
  transition:
    max-height 0.6s cubic-bezier(0.19, 1, 0.22, 1),
    opacity 0.6s cubic-bezier(0.19, 1, 0.22, 1),
    padding 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  padding-bottom: ${(props) => (props.isOpen ? "2rem" : "0")};
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-family: var(--font-serif);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-loose);
  color: var(--text-primary);
  opacity: 0.8;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  background-color: transparent;
  border: 1px solid var(--color-border);
  font-family: var(--font-sans);
  font-size: 0.875rem;
  color: var(--text-primary);
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: var(--text-primary);
    background-color: rgba(0, 0, 0, 0.02);
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  background-color: transparent;
  border: 1px solid var(--color-border);
  font-family: var(--font-sans);
  font-size: 0.875rem;
  color: var(--text-primary);
  outline: none;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  background-size: 0.65rem auto;
  transition: all 0.2s ease;

  &:focus {
    border-color: var(--text-primary);
    background-color: rgba(0, 0, 0, 0.02);
  }
`;


// Slider Components

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  margin: 2rem 0;
`;

export const SliderTrack = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 90%;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`;

export const RangeFill = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  background: var(--text-primary);
  border-radius: 2px;
`;

export const RangeInput = styled.input`
  position: absolute;
  width: 100%;
  left: 0;
  height: 20px; /* Give it height to ensure it exists in layout */
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  appearance: none;
  background: none;
  z-index: 10;
  margin: 0;
  touch-action: none; /* specific to slider dragging */

  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px; /* Larger touch target */
    height: 20px;
    border-radius: 50%;
    background: var(--bg-primary);
    border: 2px solid var(--text-primary);
    cursor: grab;
    pointer-events: auto;
    transition:
      transform 0.1s ease,
      background-color 0.2s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  }

  &::-webkit-slider-thumb:active {
    cursor: grabbing;
    transform: scale(1.1);
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: var(--bg-primary);
    border: 2px solid var(--text-primary);
    cursor: grab;
    pointer-events: auto;
    border: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  &::-moz-range-thumb:active {
    cursor: grabbing;
    transform: scale(1.1);
  }
`;
