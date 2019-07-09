import React, { Fragment, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import AuthContext from "../../context/auth/authContext";

import MyAccountGuest from "../../components/MyAccount/MyAccountGuest";
import MyAccountUser from "../../components/MyAccount/MyAccountUser";

const MyAccount = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout } = authContext;

  const goToScreen = nameScreen => {
    navigation.navigate(nameScreen);
  };

  return (
    <View style={styles.viewBody}>
      {isAuthenticated ? (
        <Fragment>
          <MyAccountUser />
          <Button title="Cerrar Sesión" onPress={() => logout()} />
        </Fragment>
      ) : (
        <MyAccountGuest goToScreen={goToScreen} />
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
