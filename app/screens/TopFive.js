import React from "react";
import { StyleSheet, View, Text } from "react-native";
import api from "../utils/ApiConnection";
import { Button } from "react-native-elements";

const TopFive = () => {
  const getFeaturedBranches = async () => {
    try {
      const res = await api.get("/api/featuredbranches/");
    } catch (err) {}
  };

  return (
    <View style={styles.viewBody}>
      <Text>TopFive Screen</Text>
      <Button title="Get Branches" onPress={getFeaturedBranches} />
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
