import { useState, useEffect } from "react";
import apiClient from "@lib/apiClient";

const useBackendHealth = () => {
  const [status, setStatus] = useState("Checking server...");

  useEffect(() => {
    let active = true;

    const checkServer = async () => {
      try {
        await apiClient("/health", {}, false);

        if (active) setStatus("Ready");
      } catch {
        if (active) {
          setStatus("Waking up server...");
          setTimeout(checkServer, 2000);
        }
      }
    };

    checkServer();

    return () => {
      active = false;
    };
  }, []);

  return {
    isBackendReady: status === "Ready",
    healthStatus: status,
  };
};

export default useBackendHealth;
