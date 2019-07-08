import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";

const AuthState = props => {
  const initialState = {};

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{}}>{props.children}</AuthContext.Provider>
  );
};

export default AuthState;
