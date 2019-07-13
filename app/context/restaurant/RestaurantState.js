import React, { useReducer } from "react";
import RestaurantContext from "./restaurantContext";
import restaurantReducer from "./restaurantReducer";
import {} from "../types";
import api from "../../utils/ApiConnection";

const AuthState = props => {
  const initialState = {
    restaurantPhoto: null
  };

  const [state, dispatch] = useReducer(restaurantReducer, initialState);

  return (
    <RestaurantContext.Provider
      value={{
        restaurantPhoto: state.restaurantPhoto
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default AuthState;
