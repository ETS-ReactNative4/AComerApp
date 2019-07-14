import { SET_RESTAURANT_PHOTO, LOADING, ADD_RESTAURANT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_RESTAURANT_PHOTO:
      return {
        ...state,
        restaurantPhoto: action.payload,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};
