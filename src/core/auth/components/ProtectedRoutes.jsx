import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { state } = useAuth();

  if (!state.isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoutes;
