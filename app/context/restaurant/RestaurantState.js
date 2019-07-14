import React, { useReducer } from "react";
import RestaurantContext from "./restaurantContext";
import restaurantReducer from "./restaurantReducer";
import { SET_RESTAURANT_PHOTO, LOADING, ADD_RESTAURANT } from "../types";
import { RNS3 } from "react-native-aws3";
import config from "../../utils/AwsConfig";

const AuthState = props => {
  const initialState = {
    restaurantPhoto: null,
    loading: false
  };

  const [state, dispatch] = useReducer(restaurantReducer, initialState);

  // SET RESTAURANT PHOTO
  const setRestaurantPhoto = async file => {
    try {
      await dispatch({
        type: SET_RESTAURANT_PHOTO,
        payload: file
      });
    } catch (err) {
      toast.show("Ocurrió un error al subir la imagen");
    }
  };

  // ADD RESTAURANT
  const addRestaurant = async (formData, file, toast, timeout) => {
    try {
      console.log("FORM DATA", formData);
      console.log("FILE", file);
      console.log("TOAST", toast);
      console.log("TIMEOUT", timeout);
    } catch (err) {
      console.log("ERROR", err);
    }
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurantPhoto: state.restaurantPhoto,
        loading: state.loading,
        setRestaurantPhoto,
        addRestaurant
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default AuthState;
