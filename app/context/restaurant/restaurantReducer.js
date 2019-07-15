import {
  SET_RESTAURANT_PHOTO,
  LOADING,
  ADD_RESTAURANT,
  GET_RESTAURANTS,
  SET_START_RESTAURANTS,
  LOADING_RESTAURANTS,
  CHECK_ADD_REVIEW_USER
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
        limitRestaurants: state.limitRestaurants + action.payload,
        startRestaurants: 0
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
    case CHECK_ADD_REVIEW_USER: {
      return {
        ...state,
        userHasReview: action.payload
      };
    }
    default:
      return state;
  }
};
