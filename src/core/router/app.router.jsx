import { createBrowserRouter, createHashRouter } from "react-router-dom";
import HomeView from "../../pages/home/views/HomeView";
import LoginView from "../../pages/login/views/LoginView/LoginView";
import PublicLayout from "../layouts/Public/PublicLayout";
import ProtectedRoutes from "../auth/components/ProtectedRoutes";
import PublicRoutes from "../auth/components/PublicRoutes";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <PublicLayout>
          <HomeView />
        </PublicLayout>
      </ProtectedRoutes>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoutes>
        <PublicLayout>
          <LoginView />
        </PublicLayout>
      </PublicRoutes>
    ),
  },
]);
