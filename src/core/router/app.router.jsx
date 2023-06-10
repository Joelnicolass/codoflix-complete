import { createBrowserRouter, createHashRouter } from "react-router-dom";
import HomeView from "../../pages/home/views/HomeView";
import LoginView from "../../pages/login/views/LoginView/LoginView";
import PublicLayout from "../layouts/Public/PublicLayout";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicLayout>
        <HomeView />
      </PublicLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicLayout>
        <LoginView />
      </PublicLayout>
    ),
  },
]);
