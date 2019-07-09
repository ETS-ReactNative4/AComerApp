import React, { useRef, useState, useContext, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { Button, Text, Image } from "react-native-elements";
import Toast from "react-native-easy-toast";
import AuthContext from "../../context/auth/authContext";

import t from "tcomb-form-native";
const Form = t.form.Form;
import { RegisterStruct, RegisterOptions } from "../../forms/Register";

const Register = ({ navigation }) => {
  const registerForm = useRef(null);
  const toast = useRef(null);

  const authContext = useContext(AuthContext);
  const { register, isAuthenticated, setError, error } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate("MyAccount");
    }

    if (error === "User already exists.") {
      //setAlert(error, "red");
      //clearErrors();
      console.log(error);
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

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
      setError("Tus contraseñas no coinciden.");
    } else {
      const validate = registerForm.current.getValue();
      if (validate) {
        register({ name, email, password });
        console.log("VALIDADO");
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
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    marginLeft: 30,
    marginRight: 30
  },
  logo: {
    width: 200,
    height: 100
  },
  containerLogo: {
    alignItems: "center"
  },
  viewForm: {
    marginTop: 40
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
