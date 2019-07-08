import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import * as firebase from "firebase";

import MyAccountGuest from "../../components/MyAccount/MyAccountGuest";
import MyAccountUser from "../../components/MyAccount/MyAccountUser";

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

  // const logout = () => {
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => setLogin(false));
  // };
  // <Button title="Cerrar Sesión" onPress={() => logout()} />

  return (
    <View style={styles.viewBody}>
      {login ? <MyAccountUser /> : <MyAccountGuest goToScreen={goToScreen} />}
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
