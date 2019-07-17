import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import RestaurantContext from "../../context/restaurant/restaurantContext";

const MyRestaurants = ({ user }) => {
  const restaurantContext = useContext(RestaurantContext);
  const { loadMyRestaurants } = restaurantContext;

  useEffect(() => {
    //loadMyRestaurants();
  }, []);

  return (
    <View style={styles.viewBody}>
      {user && <Text> {user.name} </Text>}
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
