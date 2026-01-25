import styled from "@emotion/styled";
import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Plus } from "lucide-react";

// Modular Components & Hook
import InventoryTab from "../components/Admin/InventoryTab";
import OrdersTab from "../components/Admin/OrdersTab";
import ProductEditor from "../components/Admin/ProductEditor";
import { useAdmin } from "../hooks/useAdmin";

const AdminWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

const ContentArea = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  padding: 10rem 3rem 6rem;
  flex: 1;
  @media (max-width: 768px) {
    padding: 8rem 1.5rem 4rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 5rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-weight: 700;
`;

const Title = styled.h1`
  font-family: var(--font-serif);
  font-size: 4rem;
  letter-spacing: -0.02em;
  margin: 0;
`;

const Tabs = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 3rem;
`;

const TabBtn = styled.button`
  background: none;
  border: none;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  padding: 0;
  cursor: pointer;
  color: ${(props) => (props.active ? "#000" : "#ccc")};
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: ${(props) => (props.active ? "100%" : "0%")};
    height: 2px;
    background-color: #000;
    transition: width 0.3s ease;
  }
`;

const PrimaryBtn = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 1.25rem 2.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #222;
    transform: translateY(-2px);
  }
`;

const Admin = () => {
  const { role } = useAuthContext();
  const navigate = useNavigate();
  const admin = useAdmin();

  useEffect(() => {
    if (role !== "admin") navigate("/");
  }, [role, navigate]);

  if (admin.loading) return <Loader />;
  if (admin.error)
    return <Error message={admin.error} onRetry={admin.loadData} />;

  return (
    <AdminWrapper>
      <ContentArea>
        <Header>
          <TitleGroup>
            <Subtitle>Administrative Workspace</Subtitle>
            <Title>eKart.</Title>
            <Tabs>
              <TabBtn
                active={admin.activeTab === "inventory"}
                onClick={() => admin.setActiveTab("inventory")}
              >
                Inventory
              </TabBtn>
              <TabBtn
                active={admin.activeTab === "orders"}
                onClick={() => admin.setActiveTab("orders")}
              >
                Orders Hub
              </TabBtn>
            </Tabs>
          </TitleGroup>

          {admin.activeTab === "inventory" && (
            <PrimaryBtn onClick={() => admin.openEditor()}>
              Add Product <Plus size={18} />
            </PrimaryBtn>
          )}
        </Header>

        {admin.activeTab === "inventory" ? (
          <InventoryTab products={admin.data} onEdit={admin.openEditor} />
        ) : (
          <OrdersTab
            orders={admin.data}
            onUpdateStatus={admin.updateOrderStatus}
            syncing={admin.syncing}
          />
        )}
      </ContentArea>

      <ProductEditor
        isOpen={admin.isModalOpen}
        onClose={admin.closeEditor}
        product={admin.editingProduct}
        onSubmit={admin.submitProduct}
        isSubmitting={admin.syncing}
      />

      <Footer />
    </AdminWrapper>
  );
};

export default Admin;
