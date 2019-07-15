import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Image, Icon, ListItem } from "react-native-elements";
import { ResizeMode } from "expo-av/build/Video";

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
  }
});

export default Restaurant;
