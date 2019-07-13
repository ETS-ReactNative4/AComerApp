import { SET_RESTAURANT_PHOTO } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_RESTAURANT_PHOTO:
      return {
        ...state,
        restaurantPhoto: action.payload
      };
    default:
      return state;
  }
};
