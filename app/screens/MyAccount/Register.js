import React from "react";
import { StyleSheet, View, Text } from "react-native";

import t from "tcomb-form-native";
const Form = t.form.Form;
import { RegisterStruct, RegisterOptions } from "../../forms/Register";

const Register = () => {
  return (
    <View style={styles.viewBody}>
      <Text>Register Screen</Text>
      <Form type={RegisterStruct} options={RegisterOptions} />
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

export default Register;
