import React, { Fragment, useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import AuthContext from "../../context/auth/authContext";

import MyAccountGuest from "../../components/MyAccount/MyAccountGuest";
import MyAccountUser from "../../components/MyAccount/MyAccountUser";

const MyAccount = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loadUser } = authContext;

  useEffect(() => {
    loadUser();
  }, []);

  const goToScreen = nameScreen => {
    navigation.navigate(nameScreen);
  };

  return (
    <View style={styles.viewBody}>
      {isAuthenticated ? (
        <Fragment>
          <MyAccountUser />
        </Fragment>
      ) : (
        <MyAccountGuest goToScreen={goToScreen} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1
  }
});

export default MyAccount;
