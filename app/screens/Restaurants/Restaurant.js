import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Restaurant = () => {
  return (
    <View style={styles.viewBody}>
      <Text>Restaurant View</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1
  }
});

export default Restaurant;
