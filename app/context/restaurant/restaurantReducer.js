import {
  SET_RESTAURANT_PHOTO,
  LOADING,
  ADD_RESTAURANT,
  GET_RESTAURANTS,
  SET_START_RESTAURANTS,
  LOADING_RESTAURANTS
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
    case SET_START_RESTAURANTS: {
      return {
        ...state,
        startRestaurants: state.startRestaurants + action.payload
      };
    }
    case LOADING_RESTAURANTS: {
      return {
        ...state,
        loadingRestaurants: action.payload
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
