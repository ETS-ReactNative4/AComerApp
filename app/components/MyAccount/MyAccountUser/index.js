import React from "react";
import { StyleSheet, View, Text } from "react-native";
import UserInfo from "./UserInfo";

const MyAccountUser = () => {
  return (
    <View style={styles.viewBody}>
      <UserInfo />
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 30,
    paddingRight: 30
  }
});

export default MyAccountUser;
