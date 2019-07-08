import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

import t from "tcomb-form-native";
const Form = t.form.Form;
import { RegisterStruct, RegisterOptions } from "../../forms/Register";

const Register = () => {
  onSubmit = () => {
    console.log("Register");
  };

  return (
    <View style={styles.viewBody}>
      <Form type={RegisterStruct} options={RegisterOptions} />
      <Button title="¡Unirse!" onPress={onSubmit} />
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
