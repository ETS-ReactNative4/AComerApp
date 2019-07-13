import React from "react";
import { StyleSheet, View, Text } from "react-native";

const AddRestaurant = () => {
  return (
    <View style={styles.viewBody}>
      <Text>Add Restaurant Screen</Text>
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

export default AddRestaurant;
