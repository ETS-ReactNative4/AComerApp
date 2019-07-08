import React from "react";
import { StyleSheet, View, Text } from "react-native";

import t from "tcomb-form-native";
const Form = t.form.Form;
import { RegisterStruct, RegisterOptions } from "../../forms/Register";

const Register = () => {
  return (
    <View style={styles.viewBody}>
      <Form type={RegisterStruct} options={RegisterOptions} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 40,
    marginRight: 40
  }
});

export default Register;
