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
    <ScrollView style={styles.viewBody}>
      {topFiveRestaurants ? (
        <View>
          {topFiveRestaurants.map((restaurant, index) => {
            return (
              <Card key={index}>
                <Image
                  style={styles.restaurantImage}
                  resizeMode="cover"
                  source={{ uri: restaurant.image }}
                />
                <View style={styles.titleRating}>
                  <Text style={styles.title}>{restaurant.name}</Text>
                  <Rating
                    imageSize={20}
                    startingValue={restaurant.rating}
                    readonly
                  />
                </View>
              </Card>
            );
          })}
        </View>
      ) : (
        <View>
          <ActivityIndicator size="large" />
          <Text>Cargando Restaurantes</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1
  },
  restaurantImage: {
    width: "100%",
    height: 200
  },
  titleRating: {
    flexDirection: "row",
    marginTop: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default TopFive;
