import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SET_ERROR,
  REMOVE_ERROR
} from "../types";
import { AsyncStorage } from "react-native";

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      AsyncStorage.setItem("token", action.token);
      return {
        ...state,
        isAuthenticated: true
      };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case AUTH_ERROR:
      AsyncStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.msg
      };
    case REMOVE_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
