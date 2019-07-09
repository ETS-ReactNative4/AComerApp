import React from "react";
import { StyleSheet, View } from "react-native";
import UserNavigation from "./app/navigations/User";
import AuthState from "./app/context/auth/AuthState";

import firebaseConfig from "./app/utils/Firebase";
import * as firebase from "firebase";
firebase.initializeApp(firebaseConfig);

import setAuthToken from "./app/utils/setAuthToken";
import { AsyncStorage } from "react-native";

if (AsyncStorage.token) {
  setAuthToken(AsyncStorage.token);
}

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
