import React from "react";
import { StyleSheet, View } from "react-native";
import UserNavigation from "./app/navigations/User";
import AuthState from "./app/context/auth/AuthState";
import RestaurantState from "./app/context/restaurant/RestaurantState";
import setAuthToken from "./app/utils/setAuthToken";
import { AsyncStorage } from "react-native";

AsyncStorage.getItem("token", (err, result) => {
  if (!err) {
    setAuthToken(result);
  }
});

const App = () => {
  return (
    <View style={styles.container}>
      <AuthState>
        <RestaurantState>
          <UserNavigation />
        </RestaurantState>
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
