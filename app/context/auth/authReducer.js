import { SET_ERROR, REMOVE_ERROR } from "../types";

export default (state, action) => {
  switch (action.type) {
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
