import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Overlay, Input, Button } from "react-native-elements";

const OverlayOneInput = () => {
  return (
    <Overlay
      isVisible={true}
      overlayBackgroundColor="transparent"
      overlayStyle={styles.overlayStyle}
    >
      <View style={styles.viewOverlay}>
        <Input
          containerStyle={styles.inputContainer}
          placeholder="texto"
          onChangeText={value => console.log(value)}
          value=""
        />
        <Button title="Actualizar" buttonStyle={styles.buttonUpdate} />
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlayStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  viewOverlay: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderColor: "#ffc107",
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  inputContainer: {
    marginBottom: 20
  },
  buttonUpdate: {
    backgroundColor: "#ffc107"
  }
});

export default OverlayOneInput;
