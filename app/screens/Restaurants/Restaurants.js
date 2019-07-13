import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ActionButton from "react-native-action-button";

const Restaurants = ({ navigation }) => {
  const goToScreen = name => {
    navigation.navigate(name);
  };

  return (
    <View style={styles.viewBody}>
      <Text>Restaurants Screen</Text>
      <ActionButton
        buttonColor="#ffc107"
        onPress={() => goToScreen("AddRestaurant")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});

export default Restaurants;
