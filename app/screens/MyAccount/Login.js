import React, { useRef, useState, useContext } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Image, Button } from "react-native-elements";
import Toast, { DURATION } from "react-native-easy-toast";
import AuthContext from "../../context/auth/authContext";

import t from "tcomb-form-native";
const Form = t.form.Form;
import { LoginStruct, LoginOptions } from "../../forms/Login";

import * as firebase from "firebase";

const Login = () => {
  const loginForm = useRef(null);
  const toast = useRef(null);
  const authContext = useContext(AuthContext);
  const { setError, error } = authContext;
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = formData => setUser(formData);

  const onSubmit = () => {
    if (email === "" || password === "") {
      setError("Debes completar todos los campos");
    } else {
      const validate = loginForm.current.getValue();
      if (validate) {
        firebase
          .auth()
          .signInWithEmailAndPassword(validate.email, validate.password)
          .then(res => console.log(res))
          .catch(() =>
            toast.current.show("Ocurrió un error al acceder a tu cuenta.", 1500)
          );
      } else {
        setError("Formulario Inválido");
      }
    }
  };

  return (
    <View style={styles.viewBody}>
      <Image
        source={require("../../../assets/img/logo.png")}
        style={styles.logo}
        containerStyle={styles.containerLogo}
        PlaceholderContent={<ActivityIndicator />}
        resizeMode="contain"
      />
      <View style={styles.viewForm}>
        <Form
          ref={loginForm}
          type={LoginStruct}
          options={LoginOptions}
          value={user}
          onChange={onChange}
        />
        <Button
          title="¡Acceder!"
          buttonStyle={styles.buttonLoginContainer}
          onPress={onSubmit}
        />
        <Text style={styles.formErrorMessage}>{error}</Text>
        <Toast
          ref={toast}
          position="top"
          positionValue={250}
          fadeInDuration={750}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{ color: "#fff" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40
  },
  containerLogo: {
    alignItems: "center"
  },
  viewForm: {
    marginTop: 100
  },
  logo: {
    width: 200,
    height: 100
  },
  buttonLoginContainer: {
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

export default Login;
