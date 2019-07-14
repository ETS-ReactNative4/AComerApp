import React, { useReducer } from "react";
import RestaurantContext from "./restaurantContext";
import restaurantReducer from "./restaurantReducer";
import { SET_RESTAURANT_PHOTO, LOADING, ADD_RESTAURANT } from "../types";
import api from "../../utils/ApiConnection";
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
  const addRestaurant = async (formData, file, id, toast, timeout) => {
    try {
      const res = await api.post("/api/restaurants/", { formData, file, id });
      toast.show("Restaurant creado correctamente", timeout);
    } catch (err) {
      toast.show("Ocurrió un error al crear el restaurant", timeout);
    }
  };

  // UPLOAD IMAGE
  const uploadImage = async (file, id, toast, timeout) => {
    try {
      const res = await RNS3.put(file, config).progress(e => {
        if (e.percent < 1) dispatch({ type: LOADING, payload: true });
      });

      //updateUser({ image: res.body.postResponse.location }, id, toast, timeout);
    } catch (err) {
      toast.show("Ocurrió un error al subir la imagen", timeout);
    }
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurantPhoto: state.restaurantPhoto,
        loading: state.loading,
        setRestaurantPhoto,
        addRestaurant,
        uploadImage
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default AuthState;
