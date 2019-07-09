import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { SET_ERROR, REMOVE_ERROR } from "../types";

const AuthState = props => {
  const initialState = {
    user: null,
    isAuthenticated: null,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // LOGIN USER

  // SET ERROR
  const setError = msg => {
    dispatch({ type: SET_ERROR, msg });
    setTimeout(() => dispatch({ type: REMOVE_ERROR }), 2000);
  };

  return (
    <AuthContext.Provider
      value={{
        error: state.error,
        setError
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
