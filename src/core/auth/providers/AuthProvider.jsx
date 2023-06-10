import React, { useReducer } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  authInit,
  authInitialState,
  authReducer,
} from "../reducers/authReducer";

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState, authInit);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
