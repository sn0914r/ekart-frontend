import { useState } from "react";
import Error from "../../../shared/components/Error";
import Loader from "../../../shared/components/Loader";
import AdminQuery from "../admin.query";
import AdminProductCard from "../components/AdminProductCard";
import {
  PageWrapper,
  PageHeader,
  PageTitle,
  AddButton,
  EmptyState,
  EmptyStateText,
} from "./AdminProductPage.styles";

import AdminProductForm from "../components/AdminProductForm";

const AdminProductPage = () => {
  const {
    data: products,
    error,
    isLoading,
    isError,
    refetch: refetchProducts,
  } = AdminQuery.useGetAllProductsAdmin();

  // Form state management
  const [showForm, setShowForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setShowForm(true);
  };

  const handleAddProduct = () => {
    refetchProducts();
    setSelectedProduct(null);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedProduct(null);
  };

  const handleFormSuccess = () => handleCloseForm();

  if (isError) {
    return <Error message={error?.message} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <PageWrapper>
      <div className="container">
        <PageHeader>
          <PageTitle>Products</PageTitle>
          <AddButton onClick={handleAddProduct}>+ Add Product</AddButton>
        </PageHeader>

        {products?.length === 0 ? (
          <EmptyState>
            <EmptyStateText>No products found</EmptyStateText>
            <AddButton onClick={handleAddProduct}>
              Create Your First Product
            </AddButton>
          </EmptyState>
        ) : (
          <div className="row g-4">
            {products.map((product) => (
              <div key={product._id} className="col-6 col-md-3 col-lg-2">
                <AdminProductCard
                  product={product}
                  editHandler={handleEditProduct}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal Overlay for Form */}
      {showForm && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            zIndex: 1000,
            padding: "2rem 1rem",
            overflowY: "auto",
          }}
          onClick={handleCloseForm}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxHeight: "calc(100vh - 4rem)",
              overflowY: "auto",
              margin: "auto 0",
            }}
          >
            <AdminProductForm
              product={selectedProduct}
              onClose={handleCloseForm}
              onSuccess={handleFormSuccess}
              refetchProducts={refetchProducts}
            />
          </div>
        </div>
      )}
    </PageWrapper>
  );
};

export default AdminProductPage;
