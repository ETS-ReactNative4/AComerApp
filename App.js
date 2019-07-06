import React from "react";
import { StyleSheet, View } from "react-native";

import UserNavigation from "./app/navigations/User";

const App = () => {
  return (
    <View style={styles.container}>
      <UserNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
