import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useAddToCartMutation } from "@features/cart/hooks/api/useAddToCartMutation";
import { useCart } from "@features/cart/hooks/ui/useCart";
import useAuthStore from "@app/store/authStore";

export const useProductActions = (product) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const { isItemInCart } = useCart();
  const { mutate: addToCartMutation } = useAddToCartMutation();
  const [activeSize, setActiveSize] = useState("");

  useEffect(() => {
    if (product?.attributes?.size?.length > 0) {
      setActiveSize(product.attributes.size[0]);
    }
  }, [product]);

  const isAdded = isItemInCart(product?.id || product?._id);
  const outOfStock = product?.stock <= 0;

  const handleAddToCart = () => {
    if (!isAuthenticated) return;
    if (!isAdded && !outOfStock) {
      addToCartMutation(
        { productId: product.id || product._id, variant: { size: activeSize } },
        {
          onSuccess: () => toast.success("Item added to cart"),
          onError: (err) => toast.error(err.message || "Failed to add item"),
        },
      );
    }
  };

  return {
    isAuthenticated,
    isAdded,
    outOfStock,
    activeSize,
    setActiveSize,
    handleAddToCart,
  };
};
