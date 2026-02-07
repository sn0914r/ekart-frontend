import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import adminApi from "./admin.api";

// Product
const useGetAllProductsAdmin = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => adminApi.getAllAdmin(),
  });
};

const usePostProductAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData) => adminApi.post(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      alert("Product added successfully");
    },
    onError: () => {
      alert("Something went wrong");
    },
  });
};

const usePatchProductAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => adminApi.patch(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      alert("Product updated successfully");
    },
    onError: () => {
      alert("Failed to update product");
    },
  });
};

// Orders
const useGetAllOrdersAdmin = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: () => adminApi.getOrdersAdmin(),
  });
};

const usePatchShippingStatusAdmin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }) => adminApi.patchShippingStatusAdmin(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      alert("Shipping status updated successfully");
    },
    onError: () => {
      alert("Failed to update shipping status");
    },
  });
};

export default {
  useGetAllProductsAdmin,
  usePostProductAdmin,
  usePatchProductAdmin,
  useGetAllOrdersAdmin,
  usePatchShippingStatusAdmin,
};
