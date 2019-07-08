import React from "react";
import { StyleSheet, View } from "react-native";
import { Input, Icon } from "react-native-elements";

const InputTemplate = ({ config }) => {
  const { label, placeholder, error, password, secureTextEntry } = config;

  return (
    <View>
      <Input
        placeholder={placeholder}
        password={password}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default InputTemplate;
