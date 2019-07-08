import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";

import t from "tcomb-form-native";
const Form = t.form.Form;
import { RegisterStruct, RegisterOptions } from "../../forms/Register";

const Register = () => {
  const registerForm = useRef(null);

  onSubmit = () => {
    const validate = registerForm.current.getValue();
  };

  return (
    <View style={styles.viewBody}>
      <Form
        ref={registerForm}
        type={RegisterStruct}
        options={RegisterOptions}
      />
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
