import React from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon } from "react-native-elements";

const TextArea = ({ config, onChange }) => {
  return (
    <View style={styles.viewContainer}>
      <Input
        placeholder={config.placeholder}
        multiline={true}
        onChangeText={onChange}
        inputContainerStyle={styles.inputContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    margin: 12,
    height: 100,
    width: "100%"
  },
  inputContainer: {
    position: "absolute",
    height: 100,
    width: "100%",
    padding: 0,
    margin: 0
  }
});

export default TextArea;
