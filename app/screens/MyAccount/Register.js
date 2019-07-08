import React, { useRef, useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";
import AuthContext from "../../context/auth/authContext";

import t from "tcomb-form-native";
const Form = t.form.Form;
import { RegisterStruct, RegisterOptions } from "../../forms/Register";

import * as firebase from "firebase";

const Register = () => {
  const registerForm = useRef(null);
  const authContext = useContext(AuthContext);
  const { setError, error } = authContext;
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  });

  const { password, passwordConfirmation } = user;

  const onChange = formData => setUser(formData);

  const onSubmit = () => {
    if (password !== passwordConfirmation) {
      setError("Tus contraseñas no coinciden.");
    } else {
      const validate = registerForm.current.getValue();
      if (validate) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(validate.email, validate.password)
          .then(resolve => {
            console.log("Registro correcto");
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        setError("Formulario Inválido");
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
      <Text style={styles.formErrorMessage}>{error}</Text>
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
  },
  formErrorMessage: {
    color: "#f00",
    textAlign: "center",
    marginTop: 30
  }
});

export default Register;
