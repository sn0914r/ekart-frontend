import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import Button from "@shared/components/Button/Button";

import {
  DashboardWrapper,
  DashboardTitle,
  ButtonGroup,
  BackLink,
} from "./AdminDashboardPage.styles";

const AdminDashboardPage = () => {
  const navigate = useNavigate();

  return (
    <DashboardWrapper>
      <div className="container">
        <BackLink onClick={() => navigate(-1)}>
          <ArrowLeft size={14} /> Back
        </BackLink>
        <DashboardTitle>Admin Dashboard</DashboardTitle>
        <ButtonGroup>
          <Button onClick={() => navigate("/admin/products")}>
            Manage Products
          </Button>
          <Button onClick={() => navigate("/admin/orders")}>
            Manage Orders
          </Button>
        </ButtonGroup>
      </div>
    </DashboardWrapper>
  );
};

export default AdminDashboardPage;
