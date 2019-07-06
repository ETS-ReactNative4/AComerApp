import React from "react";
import { StyleSheet, View, Text } from "react-native";

const MyAccount = () => {
  return (
    <View style={styles.viewBody}>
      <Text>MyAccount Screen</Text>
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

export default MyAccount;
