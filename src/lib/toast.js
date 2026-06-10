import { toast as sonnerToast } from "sonner";

const createToast = (type) => (message, options) => {
  sonnerToast.dismiss();
  return sonnerToast[type](message, options);
};

export const toast = {
  success: createToast("success"),
  error: createToast("error"),
  info: createToast("info"),
  warning: createToast("warning"),
  message: createToast("message"),
  dismiss: sonnerToast.dismiss,
};
