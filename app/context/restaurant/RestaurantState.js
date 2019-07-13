import React, { useReducer } from "react";
import RestaurantContext from "./restaurantContext";
import restaurantReducer from "./restaurantReducer";
import { SET_RESTAURANT_PHOTO, LOADING } from "../types";
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
      const res = await RNS3.put(file, config).progress(e => {
        if (e.percent < 1) dispatch({ type: LOADING, payload: true });
      });

      dispatch({
        type: SET_RESTAURANT_PHOTO,
        payload: res.body.postResponse.location
      });
    } catch (err) {
      toast.show("Ocurrió un error al subir la imagen");
    }
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurantPhoto: state.restaurantPhoto,
        loading: state.loading,
        setRestaurantPhoto
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default AuthState;
