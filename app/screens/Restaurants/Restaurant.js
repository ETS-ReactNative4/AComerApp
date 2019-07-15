import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Image, Icon, ListItem } from "react-native-elements";

const Restaurant = ({ navigation }) => {
  const { name, description, address, city, image } = navigation.state.params;

  return (
    <View style={styles.viewBody}>
      <View style={styles.viewImage}>
        <Image
          source={{ uri: image }}
          PlaceholderContent={<ActivityIndicator />}
          style={styles.imageRestaurant}
        />
      </View>
      <View style={styles.viewRestaurantBasicInfo}>
        <Text style={styles.nameRestaurant}>{name}</Text>
        <Text style={styles.descriptionRestaurant}>{description}</Text>
        <Text style={styles.addressRestaurant}>
          {address}, {city}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1
  },
  viewImage: {
    width: "100%"
  },
  imageRestaurant: {
    width: "100%",
    height: 200,
    resizeMode: "cover"
  },
  viewRestaurantBasicInfo: {
    margin: 15
  },
  nameRestaurant: {
    fontSize: 20,
    fontWeight: "bold"
  },
  descriptionRestaurant: {
    marginTop: 5,
    color: "grey"
  },
  addressRestaurant: {
    marginTop: 5,
    color: "grey"
  }
});

export default Restaurant;
