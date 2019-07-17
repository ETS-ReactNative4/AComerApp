import React, { useContext, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import AuthContext from "../../context/auth/authContext";

import MyAccountGuest from "../../components/MyAccount/MyAccountGuest";
import MyAccountUser from "../../components/MyAccount/MyAccountUser";

const MyAccount = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loadUser } = authContext;

  useEffect(() => {
    loadUser();
  }, []);

  const goToScreen = (nameScreen, object) => {
    navigation.navigate(nameScreen, object);
  };

  return (
    <ScrollView style={styles.viewBody}>
      {isAuthenticated ? (
        <MyAccountUser goToScreen={goToScreen} />
      ) : (
        <MyAccountGuest goToScreen={goToScreen} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1
  }
});

export default MyAccount;
