import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";
import * as firebase from "firebase";

const MyAccount = ({ navigation }) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setLogin(true);
      }
    });
  });

  const [login, setLogin] = useState(false);

  goToScreen = nameScreen => {
    navigation.navigate(nameScreen);
  };

  return (
    <View style={styles.viewBody}>
      <Text>MyAccount Screen</Text>
      {login ? (
        <Button title="Mi perfil" />
      ) : (
        <Button title="Login" onPress={() => goToScreen("Login")} />
      )}
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
