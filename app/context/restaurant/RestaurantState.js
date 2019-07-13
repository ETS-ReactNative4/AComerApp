import React, { useReducer } from "react";
import RestaurantContext from "./restaurantContext";
import restaurantReducer from "./restaurantReducer";
import { SET_RESTAURANT_PHOTO } from "../types";
import api from "../../utils/ApiConnection";

const AuthState = props => {
  const initialState = {
    restaurantPhoto: null
  };

  const [state, dispatch] = useReducer(restaurantReducer, initialState);

  // SET RESTAURANT PHOTO
  const setRestaurantPhoto = photoUri => {
    dispatch({ type: SET_RESTAURANT_PHOTO, payload: photoUri });
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurantPhoto: state.restaurantPhoto,
        setRestaurantPhoto
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default AuthState;
