import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Login = () => {
  return (
    <View style={styles.viewBody}>
      <Text>Login Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 40,
    marginRight: 40
  }
});

export default Login;
