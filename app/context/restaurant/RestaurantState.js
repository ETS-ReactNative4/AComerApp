import React, { useReducer } from "react";
import RestaurantContext from "./restaurantContext";
import restaurantReducer from "./restaurantReducer";
import {
  SET_RESTAURANT_PHOTO,
  LOADING,
  ADD_RESTAURANT,
  GET_RESTAURANTS,
  SET_START_RESTAURANTS,
  LOADING_RESTAURANTS,
  CHECK_ADD_REVIEW_USER,
  GET_REVIEWS,
  LOAD_TOP_FIVE_RESTAURANTS
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
    loadingRestaurants: true,
    userHasReview: false,
    reviews: null,
    averageRestaurantReviews: null,
    topFiveRestaurants: null
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
      toast.show("¡Creado con éxito!", 100, () => {
        navigation.goBack();
        getRestaurants();
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
  const getRestaurants = async () => {
    try {
      const res = await api.get(
        `/api/restaurants/${state.limitRestaurants}/${state.startRestaurants}`
      );

      const evaluation = res.data.length - state.limitRestaurants;

      if (evaluation > -8) {
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

  // ADD_REVIEW_RESTAURANT
  const addReviewRestaurant = async (formData, toast, navigation) => {
    try {
      await api.post("/api/restaurant-reviews", formData);
      toast.show("¡Tu opinión ha sido enviada!", 100, () => {
        dispatch({ type: CHECK_ADD_REVIEW_USER, payload: true });
        navigation.goBack();
        getReviews(formData.restaurantId);
      });
    } catch (err) {
      toast.show(err.message, 1500);
    }
  };

  // CHECK_ADD_REVIEW_USER
  const checkAddReviewUser = async (formData, toast) => {
    try {
      const { restaurant_id, user_id } = formData;
      if (user_id) {
        const res = await api.get(
          `/api/restaurant-reviews/${restaurant_id}/${user_id}`
        );
        if (res.data.length > 0) {
          dispatch({ type: CHECK_ADD_REVIEW_USER, payload: true });
        } else {
          dispatch({ type: CHECK_ADD_REVIEW_USER, payload: false });
        }
      } else {
        toast.show("¡Inicia sesión para dejar tu opinión!");
      }
    } catch (err) {
      toast.show(err.message);
    }
  };

  // GET REVIEWS
  const getReviews = async restaurantId => {
    try {
      let url = `/api/restaurant-reviews/${restaurantId}`;
      const res = await api.get(url);

      const ratingRestaurants = [];
      await res.data.forEach(item => ratingRestaurants.push(item.stars));
      let sum = 0;
      ratingRestaurants.map(value => {
        sum = sum + value;
      });
      let average = 0;
      if (ratingRestaurants.length > 0) {
        average = sum / ratingRestaurants.length;
      }

      dispatch({ type: GET_REVIEWS, payload: { reviews: res.data, average } });
    } catch (err) {}
  };

  // LOAD_TOP_FIVE_RESTAURANTS
  const loadTopFiveRestaurants = async () => {
    try {
      console.log("LOAD TOP FIVE");
    } catch (err) {
      console.log(err.message);
    }
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
        userHasReview: state.userHasReview,
        reviews: state.reviews,
        averageRestaurantReviews: state.averageRestaurantReviews,
        topFiveRestaurants: state.topFiveRestaurants,
        setRestaurantPhoto,
        addRestaurant,
        uploadImage,
        getRestaurants,
        setStartRestaurants,
        addReviewRestaurant,
        checkAddReviewUser,
        getReviews,
        loadTopFiveRestaurants
      }}
    >
      {props.children}
    </RestaurantContext.Provider>
  );
};

export default AuthState;
