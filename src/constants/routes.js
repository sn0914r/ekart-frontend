export const ROUTES = {
  HOME: "/",
  CART: "/cart",
  ABOUT: "/about",
  PROFILE: "/profile",
  FORBIDDEN: "/forbidden",
  WISHLIST: {
    ROOT: "/wishlist/*",
    BASE: "/wishlist",
  },

  AUTH: {
    ROOT: "/auth/*",
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
  },

  PRODUCT: {
    ROOT: "/product/*",
    DETAILS: "/product/:id",
    VIEW: (id) => `/product/${id}`,
  },

  ORDERS: {
    ROOT: "/orders/*",
    LIST: "/orders",
    SUCCESS: "/orders/success",
    DETAILS: "/orders/:id",
    VIEW: (id) => `/orders/${id}`,
  },

  CHECKOUT: {
    ROOT: "/checkout/*",
    BASE: "/checkout",
    SHIPPING: "/checkout/shipping-address",
  },
};
