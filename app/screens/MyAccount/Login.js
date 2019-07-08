import React, { useRef, useState, useContext } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Image, Button, SocialIcon, Divider } from "react-native-elements";
import Toast, { DURATION } from "react-native-easy-toast";
import AuthContext from "../../context/auth/authContext";
import * as Facebook from "expo-facebook";

import t from "tcomb-form-native";
const Form = t.form.Form;
import { LoginStruct, LoginOptions } from "../../forms/Login";

import * as firebase from "firebase";
import { FacebookApi } from "../../utils/Social";

const Login = ({ navigation }) => {
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
          .then(() =>
            toast.current.show("¡Bienvenido!", 100, () => {
              navigation.navigate("MyAccount");
            })
          )
          .catch(() =>
            toast.current.show(
              "Credenciales incorrectas, revise sus datos.",
              1500
            )
          );
      } else {
        setError("Formulario Inválido");
      }
    }
  };

  const loginFacebook = async () => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      FacebookApi.application_id,
      { permissions: FacebookApi.permissions }
    );

    if (type == "success") {
      const credentials = firebase.auth.FacebookAuthProvider.credential(token);

      firebase
        .auth()
        .signInWithCredential(credentials)
        .then(() => {
          toast.current.show("¡Bienvenido!", 100, () => {
            navigation.navigate("MyAccount");
          });
        })
        .catch(() =>
          toast.current.show("Error accediendo con Facebook.", 1500)
        );
    } else if (type === "cancel") {
      toast.current.show("Inicio de sesión cancelada.", 1500);
    } else {
      toast.current.show("Error desconocido.", 1500);
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
          positionValue={350}
          fadeInDuration={750}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{ color: "#fff" }}
        />
        <Divider style={styles.divider} />
        <SocialIcon
          title="Acceder con Facebook"
          button
          type="facebook"
          onPress={() => loginFacebook()}
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
    marginTop: 40
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
  },
  divider: {
    backgroundColor: "#ffc107",
    marginBottom: 20
  }
});

export default Login;
