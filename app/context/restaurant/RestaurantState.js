import React, { useReducer } from "react";
import RestaurantContext from "./restaurantContext";
import restaurantReducer from "./restaurantReducer";
import {
  SET_RESTAURANT_PHOTO,
  LOADING,
  ADD_RESTAURANT,
  GET_RESTAURANTS
} from "../types";
import api from "../../utils/ApiConnection";
import { RNS3 } from "react-native-aws3";
import config from "../../utils/AwsConfig";

const AuthState = props => {
  const initialState = {
    restaurantPhoto: null,
    loading: false,
    restaurants: null
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
  const addRestaurant = async (
    formData,
    file,
    id,
    toast,
    timeout,
    navigation
  ) => {
    try {
      const imgUrl = await uploadImage(file);
      const res = await api.post("/api/restaurants/", { formData, imgUrl, id });
      dispatch({ type: ADD_RESTAURANT, payload: res.data });
      toast.show("Restaurant creado correctamente", 100, () => {
        navigation.goBack();
      });
    } catch (err) {
      dispatch({ type: LOADING, payload: false });
      toast.show("Error en el servidor, intente más tarde", timeout);
    }
  };

  // UPLOAD IMAGE
  const uploadImage = async file => {
    try {
      const res = await RNS3.put(file, config).progress(e => {
        if (e.percent < 1) dispatch({ type: LOADING, payload: true });
      });
      return res.body.postResponse.location;
    } catch (err) {
      toast.show("Ocurrió un error al subir la imagen", timeout);
    }
  };

  // GET_RESTAURANTS
  const getRestaurants = async toast => {
    try {
      const res = await api.get("/api/restaurants/");
      dispatch({ type: GET_RESTAURANTS, payload: res.data });
    } catch (err) {
      toast.show("Error en el servidor, nose pueden obtener los restaurants");
    }
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurantPhoto: state.restaurantPhoto,
        loading: state.loading,
        restaurants: state.restaurants,
        setRestaurantPhoto,
        addRestaurant,
        uploadImage,
        getRestaurants
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default AuthState;
