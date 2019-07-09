import React from "react";
import { StyleSheet, View, Text } from "react-native";
import axios from "axios";
import { Button } from "react-native-elements";

const TopFive = () => {
  const getFeaturedBranches = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/featuredbranches/"
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
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
