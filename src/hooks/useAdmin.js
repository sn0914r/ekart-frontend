import { useState, useEffect, useCallback } from "react";
import { productsApi } from "../api/products.api";
import { ordersApi } from "../api/orders.api";
import { useToast } from "../context/ToastContext";

export const useAdmin = () => {
  const { addToast } = useToast();
  const [activeTab, setActiveTab] = useState("inventory");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [error, setError] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      if (activeTab === "inventory") {
        const products = await productsApi.getAllAdmin();
        setData(products);
      } else {
        const orders = await ordersApi.getAllOrders();
        setData(orders.orders);
      }
    } catch (err) {
      setError(err.message || "Failed to get orders.");
    } finally {
      setLoading(false);
    }
  }, [activeTab]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const updateOrderStatus = async (orderId, newStatus) => {
    setSyncing(true);
    try {
      await ordersApi.patchOrder(orderId, { orderStatus: newStatus });
      addToast("success", `Archive status evolved: ${newStatus}`);
      loadData();
    } catch (err) {
      addToast("failure", err.message || "Failed to update order status.");
    } finally {
      setSyncing(false);
    }
  };

  /**
   * Add/ Edit a product
   */
  const submitProduct = async (formData) => {
    setSyncing(true);
    try {
      if (editingProduct) {
        // Refinement: JSON only for restricted fields
        const payload = {
          name: formData.name,
          price: Number(formData.price),
          stock: Number(formData.stock),
          isActive: formData.isActive,
        };
        await productsApi.patch(editingProduct.id, payload);
        addToast("success", "Product successfully updated.");
      } else {
        // Add: Still using FormData for new entries (if needed by backend)

        const payload = new FormData();
        const data = {
          name: formData.name,
          price: Number(formData.price),
          stock: Number(formData.stock),
          isActive: formData.isActive,
        };
        payload.append("data", JSON.stringify(data));
        payload.append("file", formData.file);

        await productsApi.post(payload);
        addToast("success", "New product successfully added.");
      }
      setIsModalOpen(false);
      loadData();
    } catch (err) {
      console.log(err);
      addToast("failure", err.message || "Failed to add/update product.");
    } finally {
      setSyncing(false);
    }
  };

  const openEditor = (product = null) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const closeEditor = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  return {
    activeTab,
    setActiveTab,
    data,
    loading,
    syncing,
    error,
    loadData,
    isModalOpen,
    editingProduct,
    openEditor,
    closeEditor,
    updateOrderStatus,
    submitProduct,
  };
};
