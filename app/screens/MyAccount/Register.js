import React, { useRef, useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";
import AuthContext from "../../context/auth/authContext";

import t from "tcomb-form-native";
const Form = t.form.Form;
import { RegisterStruct, RegisterOptions } from "../../forms/Register";

const Register = () => {
  const registerForm = useRef(null);
  const authContext = useContext(AuthContext);
  const { error } = authContext;
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  });

  const { name, email, password, passwordConfirmation } = user;

  const onChange = formData => setUser(formData);

  const onSubmit = e => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      console.log("Tus contraseñas no coinciden.");
    } else {
      //register({ name, email, password })
      const validate = registerForm.current.getValue();
      if (validate) {
        console.log("Form succes");
      } else {
        console.log("Form Error");
        console.log(authContext);
      }
    }
  };

  return (
    <View style={styles.viewBody}>
      <Form
        ref={registerForm}
        type={RegisterStruct}
        options={RegisterOptions}
        value={user}
        onChange={onChange}
      />
      <Button
        buttonStyle={styles.buttonRegisterContainer}
        title="¡Unirse!"
        onPress={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 40,
    marginRight: 40
  },
  buttonRegisterContainer: {
    backgroundColor: "#ffc107",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  }
});

export default Register;
