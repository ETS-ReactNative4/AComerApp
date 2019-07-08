import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { REGISTER_STRUCT } from "../types";

const AuthState = props => {
  const initialState = {
    registerStruct: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        registerStruct: state.registerStruct
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
