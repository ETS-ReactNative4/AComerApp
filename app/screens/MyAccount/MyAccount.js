import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

const MyAccount = ({ navigation }) => {
  goToScreen = nameScreen => {
    navigation.navigate(nameScreen);
  };

  return (
    <View style={styles.viewBody}>
      <Text>MyAccount Screen</Text>
      <Button title="Registro" onPress={() => goToScreen("Register")} />
      <Button title="Login" onPress={() => goToScreen("Login")} />
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
