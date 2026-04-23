const isDev = import.meta.env.VITE_NODE_ENV === "development";

const format = (level, message, data) => {
  return {
    level,
    message,
    data,
    time: new Date().toISOString(),
  };
};

const logger = {
  info: (message, data) => {
    if (!isDev) return;

    console.log("[INFO]", format("info", message, data));
  },

  warn: (message, data) => {
    if (!isDev) return;

    console.warn("[WARN]", format("warn", message, data));
  },

  error: (message, error) => {
    const log = format("error", message, error);

    console.error("[ERROR]", log);
  },

  debug: (message, data) => {
    if (!isDev) return;

    console.debug("[DEBUG]", format("debug", message, data));
  },
};

export { logger };
