import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Button, Image } from "react-native-elements";

const MyAccountGuest = ({ goToScreen }) => {
  return (
    <View style={styles.viewBody}>
      <Image
        source={require("../../../assets/img/image-my-account-guest-01.jpg")}
        PlaceholderContent={<ActivityIndicator />}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>Consulta tu perfil de AComer</Text>
      <Text style={styles.description}>
        ¿Como describirías tu mejor restaurante? Busca y visualiza los mejores
        restaurantes de una forma sencilla, vota cual te ha gustado más y
        comenta como ha sido tu experiencia.
      </Text>
      <Button
        title="¡Ver tu perfil!"
        buttonStyle={styles.btnViewProfile}
        onPress={() => goToScreen("Login")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30
  },
  image: {
    height: 300,
    marginBottom: 40
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10
  },
  description: {
    textAlign: "center",
    marginBottom: 20
  },
  btnViewProfile: {
    width: "100%",
    backgroundColor: "#ffc107"
  }
});

export default MyAccountGuest;
