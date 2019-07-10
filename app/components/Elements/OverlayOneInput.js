import React from "react";
import { StyleSheet, View } from "react-native";
import { Overlay, Input, Button, Icon } from "react-native-elements";

const OverlayOneInput = ({ isVisible, placeholder, updateFunction, value }) => {
  const onChangeInput = inputData => {
    value = inputData;
  };

  const update = () => {
    const newValue = value;
    updateFunction(newValue);
  };

  const close = () => {
    updateFunction(null);
  };

  return (
    <Overlay
      isVisible={isVisible}
      overlayBackgroundColor="transparent"
      overlayStyle={styles.overlayStyle}
    >
      <View style={styles.viewOverlay}>
        <Input
          containerStyle={styles.inputContainer}
          placeholder={placeholder}
          onChangeText={value => onChangeInput(value)}
        />
        <Button
          title="Actualizar"
          buttonStyle={styles.buttonUpdate}
          onPress={update}
        />
        <Icon
          containerStyle={styles.containerIconClose}
          type="material-community"
          name="close-circle-outline"
          size={30}
          color="#ffc107"
          onPress={close}
        />
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
  },
  containerIconClose: {
    position: "absolute",
    right: -15,
    top: -16
  }
});

export default OverlayOneInput;
