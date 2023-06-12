import { useTheme } from "@nextui-org/react";
import { toast } from "react-hot-toast";

export const useCustomToaster = () => {
  const { theme } = useTheme();

  const toastSuccess = (message) => {
    toast(message, {
      icon: "✅",
      style: {
        borderRadius: "10px",
        background: theme.colors.background.value,
        color: theme.colors.text.value,
        border: `1px solid ${theme.colors.secondary.value}`,
      },
    });
  };

  const toastError = (message) => {
    toast(message, {
      icon: "❌",
      style: {
        borderRadius: "10px",
        background: theme.colors.background.value,
        color: theme.colors.text.value,
        border: `1px solid ${theme.colors.error.value}`,
      },
    });
  };

  return { toastSuccess, toastError };
};
