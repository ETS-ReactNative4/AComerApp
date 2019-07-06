import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Search = () => {
  return (
    <View style={styles.viewBody}>
      <Text>Search Screen</Text>
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

export default Search;
