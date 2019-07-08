import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "react-native-elements";

import * as firebase from "firebase";

const UserInfo = () => {
  return (
    <View style={styles.viewUserInfo}>
      <Text>User Info</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: "center",
    flexDirection: "row"
  }
});

export default UserInfo;
