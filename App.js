import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import UserNavigation from "./app/navigations/User";
import AuthState from "./app/context/auth/AuthState";
import setAuthToken from "./app/utils/setAuthToken";
import { AsyncStorage } from "react-native";

import firebaseConfig from "./app/utils/Firebase";
import * as firebase from "firebase";
firebase.initializeApp(firebaseConfig);

AsyncStorage.getItem("token", (err, result) => {
  if (!err) {
    setAuthToken(result);
  }
});

const App = () => {
  return (
    <View style={styles.container}>
      <AuthState>
        <UserNavigation />
      </AuthState>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
