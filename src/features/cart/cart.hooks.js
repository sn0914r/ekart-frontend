import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import CartAPIs from "./cart.api";

const CART_KEY = ["cart"];

const useGetCart = () => {
  return useQuery({
    queryKey: CART_KEY,
    queryFn: () => CartAPIs.getCart(),
  });
};

/**
 * @desc Convenience hook — wraps useGetCart with derived computations
 */
const useCartData = () => {
  const { data: serverCart, isLoading } = useGetCart();
  const cartItems = serverCart?.cart?.items ?? [];

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const totalCartItems = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  const checkItem = (productId) =>
    cartItems.some((item) => item.productId === productId);

  return { cartItems, isLoading, calculateTotal, totalCartItems, checkItem };
};

// ─── Optimistic helpers ───────────────────────────────────────

const setupOptimistic = async (queryClient) => {
  await queryClient.cancelQueries({ queryKey: CART_KEY });
  return queryClient.getQueryData(CART_KEY);
};

const updateCartItems = (queryClient, updater) => {
  queryClient.setQueryData(CART_KEY, (old) => {
    if (!old?.cart?.items) return old;
    return { ...old, cart: { ...old.cart, items: updater(old.cart.items) } };
  });
};

// ─── Mutations ────────────────────────────────────────────────

const useAddToCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ productId, variant }) =>
      CartAPIs.addToCart(productId, variant),

    onMutate: async ({ productId }) => {
      const previous = await setupOptimistic(queryClient);
      updateCartItems(queryClient, (items) => {
        const existing = items.find((i) => i.productId === productId);
        if (existing) {
          return items.map((i) =>
            i.productId === productId ? { ...i, quantity: i.quantity + 1 } : i,
          );
        }
        return [...items, { productId, quantity: 1, price: 0, name: "...", thumbnail: "" }];
      });
      return { previous };
    },
    onError: (_err, _vars, ctx) => queryClient.setQueryData(CART_KEY, ctx?.previous),
    onSettled: () => queryClient.invalidateQueries({ queryKey: CART_KEY }),
  });
};

const useIncreaseQty = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ productId }) => CartAPIs.increaseQty(productId),

    onMutate: async ({ productId }) => {
      const previous = await setupOptimistic(queryClient);
      updateCartItems(queryClient, (items) =>
        items.map((i) =>
          i.productId === productId ? { ...i, quantity: i.quantity + 1 } : i,
        ),
      );
      return { previous };
    },
    onError: (_err, _vars, ctx) => queryClient.setQueryData(CART_KEY, ctx?.previous),
    onSettled: () => queryClient.invalidateQueries({ queryKey: CART_KEY }),
  });
};

const useDecreaseQty = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ productId }) => CartAPIs.decreaseQty(productId),

    onMutate: async ({ productId }) => {
      const previous = await setupOptimistic(queryClient);
      updateCartItems(queryClient, (items) =>
        items
          .map((i) =>
            i.productId === productId ? { ...i, quantity: i.quantity - 1 } : i,
          )
          .filter((i) => i.quantity > 0),
      );
      return { previous };
    },
    onError: (_err, _vars, ctx) => queryClient.setQueryData(CART_KEY, ctx?.previous),
    onSettled: () => queryClient.invalidateQueries({ queryKey: CART_KEY }),
  });
};

const useRemoveItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ productId }) => CartAPIs.removeItem(productId),

    onMutate: async ({ productId }) => {
      const previous = await setupOptimistic(queryClient);
      updateCartItems(queryClient, (items) =>
        items.filter((i) => i.productId !== productId),
      );
      return { previous };
    },
    onError: (_err, _vars, ctx) => queryClient.setQueryData(CART_KEY, ctx?.previous),
    onSettled: () => queryClient.invalidateQueries({ queryKey: CART_KEY }),
  });
};

const useClearCart = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => CartAPIs.clearCart(),

    onMutate: async () => {
      const previous = await setupOptimistic(queryClient);
      updateCartItems(queryClient, () => []);
      return { previous };
    },
    onError: (_err, _vars, ctx) => queryClient.setQueryData(CART_KEY, ctx?.previous),
    onSettled: () => queryClient.invalidateQueries({ queryKey: CART_KEY }),
  });
};

export default {
  useGetCart,
  useCartData,
  useAddToCart,
  useIncreaseQty,
  useDecreaseQty,
  useRemoveItem,
  useClearCart,
};

