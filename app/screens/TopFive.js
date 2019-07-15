import React from "react";
import { StyleSheet, View, Text } from "react-native";

const TopFive = () => {
  return (
    <View style={styles.viewBody}>
      <Text>TopFive Screen</Text>
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

export default TopFive;
