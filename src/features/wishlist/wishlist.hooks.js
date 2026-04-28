import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import WishlistAPIs from "./wishlist.api";
import useAuthStore from "@store/authStore";

const WISHLIST_KEY = ["wishlist"];

const useGetWishlist = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return useQuery({
    queryKey: WISHLIST_KEY,
    queryFn: () => WishlistAPIs.getWishlist(),
    enabled: isAuthenticated, // Only fetch if user is logged in
  });
};

/**
 * @desc Convenience hook — wraps useGetWishlist with derived computations
 */
const useWishlistData = () => {
  const { data: serverWishlist, isLoading } = useGetWishlist();
  const wishlistItems = serverWishlist?.data ?? [];

  const checkItem = (productId) =>
    wishlistItems.some((item) => item.productId === productId);

  return { wishlistItems, isLoading, checkItem };
};

// ─── Optimistic helpers ───────────────────────────────────────

const setupOptimistic = async (queryClient) => {
  await queryClient.cancelQueries({ queryKey: WISHLIST_KEY });
  return queryClient.getQueryData(WISHLIST_KEY);
};

const updateWishlistItems = (queryClient, updater) => {
  queryClient.setQueryData(WISHLIST_KEY, (old) => {
    // If we have no cached data, we just return empty or what we had
    if (!old?.data) return old;
    return { ...old, data: updater(old.data) };
  });
};

// ─── Mutations ────────────────────────────────────────────────

const useAddToWishlist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (productId) => WishlistAPIs.addToWishlist(productId),

    onMutate: async (productId) => {
      const previous = await setupOptimistic(queryClient);
      updateWishlistItems(queryClient, (items) => {
        const existing = items.find((i) => i.productId === productId);
        if (existing) return items;
        // Optimistically add placeholder item
        return [...items, { productId, name: "...", price: 0, thumbnail: "" }];
      });
      return { previous };
    },
    onError: (_err, _vars, ctx) => queryClient.setQueryData(WISHLIST_KEY, ctx?.previous),
    onSettled: () => queryClient.invalidateQueries({ queryKey: WISHLIST_KEY }),
  });
};

const useRemoveWishlistProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (productId) => WishlistAPIs.removeWishlistProduct(productId),

    onMutate: async (productId) => {
      const previous = await setupOptimistic(queryClient);
      updateWishlistItems(queryClient, (items) =>
        items.filter((i) => i.productId !== productId),
      );
      return { previous };
    },
    onError: (_err, _vars, ctx) => queryClient.setQueryData(WISHLIST_KEY, ctx?.previous),
    onSettled: () => queryClient.invalidateQueries({ queryKey: WISHLIST_KEY }),
  });
};

const useClearWishlist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => WishlistAPIs.clearWishlist(),

    onMutate: async () => {
      const previous = await setupOptimistic(queryClient);
      updateWishlistItems(queryClient, () => []);
      return { previous };
    },
    onError: (_err, _vars, ctx) => queryClient.setQueryData(WISHLIST_KEY, ctx?.previous),
    onSettled: () => queryClient.invalidateQueries({ queryKey: WISHLIST_KEY }),
  });
};

export default {
  useGetWishlist,
  useWishlistData,
  useAddToWishlist,
  useRemoveWishlistProduct,
  useClearWishlist,
};
