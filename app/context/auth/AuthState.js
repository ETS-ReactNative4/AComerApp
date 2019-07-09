import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
  SET_ERROR,
  REMOVE_ERROR
} from "../types";
import { AsyncStorage } from "react-native";
import api from "../../utils/ApiConnection";
import setAuthToken from "../../utils/setAuthToken";

const AuthState = props => {
  const initialState = {
    token: AsyncStorage.getItem("token"),
    isAuthenticated: null,
    error: null,
    user: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // LOAD USER
  const loadUser = async () => {
    await AsyncStorage.getItem("token", (err, result) => setAuthToken(result));

    try {
      const res = await api.get("/api/auth");
      dispatch({ type: USER_LOADED, user: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
      setError(err.response.data.msg);
    }
  };

  // LOGIN USER
  const login = async formData => {
    try {
      const res = await api.post("/api/auth", formData);
      dispatch({ type: LOGIN_SUCCESS, token: res.data.token });
      loadUser();
    } catch (err) {
      if (formData.facebook_auth) {
        return register(formData);
      }

      dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
      setError(err.response.data.msg);
    }
  };

  // REGISTER USER
  const register = async formData => {
    try {
      const res = await api.post("/api/users/register", formData);
      dispatch({ type: REGISTER_SUCCESS, token: res.data.token });
      loadUser();
    } catch (err) {
      dispatch({ type: REGISTER_FAIL });
      setError(err.response.data.msg);
    }
  };

  // LOGOUT USER
  const logout = () => dispatch({ type: LOGOUT });

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
        user: state.user,
        error: state.error,
        setError,
        loadUser,
        login,
        register,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
