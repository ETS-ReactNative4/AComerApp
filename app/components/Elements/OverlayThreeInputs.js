import React from "react";
import { StyleSheet, View } from "react-native";
import { Overlay, Input, Button, Icon } from "react-native-elements";

const OverlayTwoInputs = ({
  isVisible,
  placeholderOne,
  placeholderTwo,
  placeholderThree,
  updateFunction,
  valueOne,
  valueTwo,
  valueThree,
  closeFunction
}) => {
  const onChangeInputOne = inputData => {
    valueOne = inputData;
  };

  const onChangeInputTwo = inputData => {
    valueTwo = inputData;
  };

  const onChangeInputThree = inputData => {
    valueThree = inputData;
  };

  const update = () => {
    const newValueOne = valueOne;
    const newValueTwo = valueTwo;
    const newValueThree = valueThree;
    updateFunction(newValueOne, newValueTwo, newValueThree);
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
          placeholder={placeholderOne}
          onChangeText={value => onChangeInputOne(value)}
          autoCapitalize="none"
          password={true}
          secureTextEntry={true}
        />
        <Input
          containerStyle={styles.inputContainer}
          placeholder={placeholderTwo}
          onChangeText={value => onChangeInputTwo(value)}
          autoCapitalize="none"
          password={true}
          secureTextEntry={true}
        />
        <Input
          containerStyle={styles.inputContainer}
          placeholder={placeholderThree}
          onChangeText={value => onChangeInputThree(value)}
          autoCapitalize="none"
          password={true}
          secureTextEntry={true}
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
          onPress={closeFunction}
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

export default OverlayTwoInputs;
