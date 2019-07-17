import React from "react";
import { StyleSheet, View, Text } from "react-native";
import UserInfo from "./UserInfo";

const MyAccountUser = ({ goToScreen }) => {
  return (
    <View style={styles.viewUserAccount}>
      <UserInfo goToScreen={goToScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewUserAccount: {
    height: "100%",
    backgroundColor: "#f2f2f2"
  }
});

export default MyAccountUser;
