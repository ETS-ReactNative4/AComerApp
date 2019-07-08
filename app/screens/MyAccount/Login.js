import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";

const Login = () => {
  return (
    <View style={styles.viewBody}>
      <Image
        source={require("../../../assets/img/logo.png")}
        style={styles.logo}
        PlaceholderContent={<ActivityIndicator />}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 100
  }
});

export default Login;
