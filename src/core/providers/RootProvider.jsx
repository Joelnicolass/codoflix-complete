import { NextUIProvider } from "@nextui-org/react";
import { darkTheme } from "../theme/themes";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "../auth/providers/AuthProvider";
import ModalProvider from "../../providers/ModalProvider";

const RootProvider = ({ children }) => {
  return (
    <HelmetProvider>
      <NextUIProvider theme={darkTheme}>
        <AuthProvider>
          <ModalProvider>{children}</ModalProvider>
        </AuthProvider>
      </NextUIProvider>
    </HelmetProvider>
  );
};

export default RootProvider;
