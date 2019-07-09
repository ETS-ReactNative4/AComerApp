import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_ERROR,
  REMOVE_ERROR
} from "../types";
import { AsyncStorage } from "react-native";
import api from "../../utils/ApiConnection";

const AuthState = props => {
  const initialState = {
    token: AsyncStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    error: null,
    user: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // LOAD USER
  const loadUser = async () => {
    if (AsyncStorage.token) {
      setAuthToken(AsyncStorage.token);
    }

    try {
      const res = await api.get("/api/auth");
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR
      });
    }
  };

  // LOGIN USER
  const login = async formData => {
    try {
      const res = await api.post("/api/auth", formData);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  // Register User
  const register = async formData => {
    try {
      const res = await api.post("/api/users", formData);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  // SET ERROR
  const setError = msg => {
    dispatch({ type: SET_ERROR, msg });
    setTimeout(() => dispatch({ type: REMOVE_ERROR }), 2000);
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        setError,
        loadUser,
        login,
        register
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
