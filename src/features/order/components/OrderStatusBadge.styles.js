import styled from "@emotion/styled";

const getStatusColor = (status) => {
  const statusLower = status?.toLowerCase();

  switch (statusLower) {
    case "pending":
      return {
        bg: "#FFF4E6",
        text: "#B45309",
        border: "#FED7AA",
      };
    case "confirmed":
      return {
        bg: "#F1F5F9",
        text: "#1E3A8A",
        border: "#E2E8F0",
      };
    case "processing":
      return {
        bg: "#DBEAFE",
        text: "#1E40AF",
        border: "#BFDBFE",
      };
    case "shipped":
      return {
        bg: "#E0E7FF",
        text: "#4338CA",
        border: "#C7D2FE",
      };
    case "delivered":
      return {
        bg: "#D1FAE5",
        text: "#065F46",
        border: "#A7F3D0",
      };
    case "cancelled":
      return {
        bg: "#FEE2E2",
        text: "#991B1B",
        border: "#FECACA",
      };
    case "paid":
      return {
        bg: "#D1FAE5",
        text: "#065F46",
        border: "#A7F3D0",
      };
    case "unpaid":
      return {
        bg: "#FEE2E2",
        text: "#991B1B",
        border: "#FECACA",
      };
    default:
      return {
        bg: "#F3F4F6",
        text: "#374151",
        border: "#E5E7EB",
      };
  }
};

export const Badge = styled.span`
  display: inline-block;
  padding: ${(props) => props.size === "small" ? "0.15rem 0.5rem" : "0.25rem 0.75rem"};
  font-size: ${(props) => props.size === "small" ? "0.65rem" : "0.75rem"};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 4px;
  background-color: ${(props) => getStatusColor(props.status).bg};
  color: ${(props) => getStatusColor(props.status).text};
  border: 1px solid ${(props) => getStatusColor(props.status).border};
`;
