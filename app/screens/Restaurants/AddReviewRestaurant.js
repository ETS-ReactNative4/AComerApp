import React from "react";
import { StyleSheet, View, Text } from "react-native";

const AddReviewRestaurant = () => {
  return (
    <View style={styles.viewBody}>
      <Text>Add Review to Restaurant</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1
  }
});

export default AddReviewRestaurant;
