import React from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon } from "react-native-elements";

const InputTemplate = ({ config }) => {
  const {
    label,
    placeholder,
    error,
    password,
    secureTextEntry,
    icontype,
    iconName
  } = config;

  return (
    <View style={styles.viewContainer}>
      <Input
        placeholder={placeholder}
        password={password}
        secureTextEntry={secureTextEntry}
        rightIcon={
          <Icon type={icontype} name={iconName} size={24} color="black" />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    marginTop: 12,
    marginBottom: 12
  }
});

export default InputTemplate;
