import {
  SET_RESTAURANT_PHOTO,
  LOADING,
  ADD_RESTAURANT,
  GET_RESTAURANTS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_RESTAURANT_PHOTO:
      return {
        ...state,
        restaurantPhoto: action.payload,
        loading: false
      };
    case ADD_RESTAURANT: {
      return {
        ...state,
        loading: false
      };
    }
    case GET_RESTAURANTS: {
      return {
        ...state,
        restaurants: action.payload
      };
    }
    case LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};
