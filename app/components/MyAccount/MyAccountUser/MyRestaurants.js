import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import RestaurantContext from "../../../context/restaurant/restaurantContext";

const MyRestaurants = ({ navigation }) => {
  const restaurantContext = useContext(RestaurantContext);
  const { loadMyRestaurants } = restaurantContext;
  const user = navigation.state.params;

  useEffect(() => {
    //loadMyRestaurants();
  }, []);

  return (
    <View style={styles.viewBody}>
      {user && <Text>{user.name}</Text>}
      <Text>Mis restaurantes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1
  }
});

export default MyRestaurants;
