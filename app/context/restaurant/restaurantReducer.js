import {
  SET_RESTAURANT_PHOTO,
  LOADING,
  ADD_RESTAURANT,
  GET_RESTAURANTS,
  SET_START_RESTAURANTS,
  LOADING_RESTAURANTS,
  CHECK_ADD_REVIEW_USER,
  GET_REVIEWS,
  SET_START_REVIEWS,
  LOAD_TOP_FIVE_RESTAURANTS,
  SET_ALL_RESTAURANTS,
  SET_FOUND_RESTAURANTS
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_FOUND_RESTAURANTS: {
      return {
        ...state,
        foundRestaurants: state.allRestaurants.filter(restaurant => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return restaurant.name.match(regex) || restaurant.city.match(regex);
        })
      };
    }
    case SET_ALL_RESTAURANTS: {
      return {
        ...state,
        allRestaurants: action.payload
      };
    }
    case LOAD_TOP_FIVE_RESTAURANTS: {
      return {
        ...state,
        topFiveRestaurants: action.payload
      };
    }
    case GET_REVIEWS: {
      return {
        ...state,
        reviews: action.payload.reviews,
        averageRestaurantReviews: action.payload.average
      };
    }
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
    case SET_START_REVIEWS: {
      return {
        ...state,
        limitReviews: state.limitReviews + action.payload,
        startReviews: 0
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
