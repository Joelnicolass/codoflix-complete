import { NextUIProvider } from "@nextui-org/react";
import { darkTheme } from "../theme/themes";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "../auth/providers/AuthProvider";
import ModalProvider from "../../providers/ModalProvider";
import FavoritesProvider from "../../providers/FavoritesProvider";

const RootProvider = ({ children }) => {
  return (
    <HelmetProvider>
      <NextUIProvider theme={darkTheme}>
        <AuthProvider>
          <FavoritesProvider>
            <ModalProvider>{children}</ModalProvider>
          </FavoritesProvider>
        </AuthProvider>
      </NextUIProvider>
    </HelmetProvider>
  );
};

export default RootProvider;
