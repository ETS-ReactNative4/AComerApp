import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import { StyleSheet, View, Text } from "react-native";
import ActionButton from "react-native-action-button";

const Restaurants = ({ navigation }) => {
  const authContext = useContext(AuthContext);
  const { loadUser, isAuthenticated } = authContext;

  useEffect(() => {
    loadUser();
  }, [isAuthenticated]);

  const goToScreen = name => {
    navigation.navigate(name);
  };

  return (
    <View style={styles.viewBody}>
      <Text>Restaurants Screen</Text>
      {isAuthenticated && (
        <ActionButton
          buttonColor="#ffc107"
          onPress={() => goToScreen("AddRestaurant")}
        />
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

export default Restaurants;
