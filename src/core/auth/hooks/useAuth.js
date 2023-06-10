import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);
  return {
    state,
    dispatch,
  };
};
