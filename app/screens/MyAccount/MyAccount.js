import React, { Fragment, useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";
import * as firebase from "firebase";

import MyAccountGuest from "../../components/MyAccount/MyAccountGuest";

const MyAccount = ({ navigation }) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setLogin(true);
      }
    });
  });

  const [login, setLogin] = useState(false);

  const goToScreen = nameScreen => {
    navigation.navigate(nameScreen);
  };

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => setLogin(false));
  };

  return (
    <View style={styles.viewBody}>
      {login ? (
        <Button title="Cerrar Sesión" onPress={() => logout()} />
      ) : (
        <MyAccountGuest />
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
