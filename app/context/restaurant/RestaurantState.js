import React, { useReducer } from "react";
import RestaurantContext from "./restaurantContext";
import restaurantReducer from "./restaurantReducer";
import {
  SET_RESTAURANT_PHOTO,
  LOADING,
  ADD_RESTAURANT,
  GET_RESTAURANTS,
  SET_START_RESTAURANTS,
  LOADING_RESTAURANTS
} from "../types";
import api from "../../utils/ApiConnection";
import { RNS3 } from "react-native-aws3";
import config from "../../utils/AwsConfig";

const AuthState = props => {
  const initialState = {
    restaurantPhoto: null,
    loading: false,
    restaurants: null,
    limitRestaurants: 8,
    startRestaurants: 0,
    loadingRestaurants: true
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
  const getRestaurants = async (limitRestaurants, startRestaurants) => {
    try {
      const res = await api.get(
        `/api/restaurants/${limitRestaurants}/${startRestaurants}`
      );
      console.log(res.data.length);
      if (res.data.length > 0) {
        dispatch({ type: GET_RESTAURANTS, payload: res.data });
      } else {
        dispatch({ type: LOADING_RESTAURANTS, payload: false });
      }
    } catch (err) {}
  };

  // SET START RESTAURANTS
  const setStartRestaurants = async restaurantsLength => {
    try {
      await dispatch({
        type: SET_START_RESTAURANTS,
        payload: restaurantsLength
      });
    } catch (err) {}
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurantPhoto: state.restaurantPhoto,
        loading: state.loading,
        restaurants: state.restaurants,
        limitRestaurants: state.limitRestaurants,
        startRestaurants: state.startRestaurants,
        loadingRestaurants: state.loadingRestaurants,
        setRestaurantPhoto,
        addRestaurant,
        uploadImage,
        getRestaurants,
        setStartRestaurants
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default AuthState;
