import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import adminApi from "./admin.api";
import { toast } from "sonner";

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
    mutationFn: (formData) => {
      toast.loading("Adding product...");
      return adminApi.post(formData);
    },
    onSuccess: () => {
      toast.dismiss();
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product added successfully");
    },
    onError: (error) => {
      toast.dismiss();
      toast.error(error.message || "Failed to add product");
    },
  });
};

const usePatchProductAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }) => {
      toast.loading("Updating product...");
      return adminApi.patch(id, data);
    },
    onSuccess: () => {
      toast.dismiss();
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product updated successfully");
    },
    onError: (error) => {
      toast.dismiss();
      toast.error(error.message || "Failed to update product");
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
    mutationFn: ({ id, data }) => {
      toast.loading("Updating shipping status...");
      return adminApi.patchShippingStatusAdmin(id, data);
    },
    onSuccess: () => {
      toast.dismiss();
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      toast.success("Shipping status updated successfully");
    },
    onError: (error) => {
      toast.dismiss();
      toast.error(error.message || "Failed to update shipping status");
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
