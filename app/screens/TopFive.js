import React, { useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ScrollView
} from "react-native";
import { Card, Image, Rating } from "react-native-elements";
import RestaurantContext from "../context/restaurant/restaurantContext";

const TopFive = () => {
  const restaurantContext = useContext(RestaurantContext);
  const { loadTopFiveRestaurants, topFiveRestaurants } = restaurantContext;

  useEffect(() => {
    loadTopFiveRestaurants();
  }, []);

  return (
    <View style={styles.viewBody}>
      {topFiveRestaurants ? (
        <Text>Lista de top five restaurants</Text>
      ) : (
        <View>
          <ActivityIndicator size="large" />
          <Text>Cargando Restaurantes</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1
  }
});

export default TopFive;
