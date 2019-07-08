import React, { useRef, useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";
import Toast, { DURATION } from "react-native-easy-toast";
import AuthContext from "../../context/auth/authContext";

import t from "tcomb-form-native";
const Form = t.form.Form;
import { RegisterStruct, RegisterOptions } from "../../forms/Register";

import * as firebase from "firebase";

const Register = ({ navigation }) => {
  const registerForm = useRef(null);
  const toast = useRef(null);
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
            toast.current.show("Registro correcto.", 100, () => {
              navigation.navigate("MyAccount");
            });
          })
          .catch(err => {
            toast.current.show("Error al registrar tu cuenta.", 1500);
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
      <Toast
        ref={toast}
        position="bottom"
        positionValue={250}
        fadeInDuration={750}
        fadeOutDuration={1000}
        opacity={0.8}
        textStyle={{ color: "#fff" }}
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
  },
  formErrorMessage: {
    color: "#f00",
    textAlign: "center",
    marginTop: 30
  }
});

export default Register;
