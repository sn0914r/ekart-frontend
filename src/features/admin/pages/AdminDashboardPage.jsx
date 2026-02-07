import { useNavigate } from "react-router-dom";
import Button from "../../../shared/components/Button";
import {
  DashboardWrapper,
  DashboardTitle,
  ButtonGroup,
} from "./AdminDashboardPage.styles";

const AdminDashboardPage = () => {
  const navigate = useNavigate();

  return (
    <DashboardWrapper>
      <div className="container">
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
