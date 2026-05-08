import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      role: "",
      isHydrated: false,

      setAuth: (accessToken) => {
        if (!accessToken) {
          set({
            accessToken: null,
            user: null,
            role: "",
            isAuthenticated: false,
            isHydrated: true,
          });
          return;
        }

        try {
          const payload = JSON.parse(atob(accessToken.split(".")[1]));
          const user = {
            id: payload.userId,
            email: payload.email,
            name: payload.name,
          };
          const role = payload.role || "user";

          set({
            accessToken,
            user,
            role,
            isAuthenticated: true,
            isHydrated: true,
          });
        } catch (error) {
          console.error("Failed to decode token", error);
          set({
            accessToken: null,
            user: null,
            role: "",
            isAuthenticated: false,
            isHydrated: true,
          });
        }
      },

      updateAccessToken: (accessToken) => {
        set({ accessToken });
      },

      clearAuth: () => {
        set({
          user: null,
          accessToken: null,
          isAuthenticated: false,
          role: "",
        });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ accessToken: state.accessToken }),
      onRehydrateStorage: () => (state) => {
        state?.setAuth(state.accessToken);
      },
    },
  ),
);

export default useAuthStore;
