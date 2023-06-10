import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const { state } = useAuth();

  if (state.isAuth) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PublicRoutes;
