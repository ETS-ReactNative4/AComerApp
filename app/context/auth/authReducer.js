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

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return console.log("USER LOADED REDUCER");
    case AUTH_ERROR:
      return console.log("AUTH ERROR REDUCER");
    case LOGIN_SUCCESS:
      return console.log("LOGIN SUCCESS REDUCER");
    case LOGIN_FAIL:
      return console.log("LOGIN FAIL REDUCER");
    case REGISTER_SUCCESS:
      return console.log("REGISTER SUCCESS REDUCER");
    case REGISTER_FAIL:
      return console.log("REGISTER FAIL REDUCER");
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
