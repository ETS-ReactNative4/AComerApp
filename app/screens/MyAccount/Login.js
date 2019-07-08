import React, { useRef, useState, useContext } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";

import t from "tcomb-form-native";
const Form = t.form.Form;
import { LoginStruct, LoginOptions } from "../../forms/Login";

const Login = () => {
  const loginForm = useRef(null);
  return (
    <View style={styles.viewBody}>
      <Image
        source={require("../../../assets/img/logo.png")}
        style={styles.logo}
        PlaceholderContent={<ActivityIndicator />}
        resizeMode="contain"
      />
      <Form ref={loginForm} type={LoginStruct} options={LoginOptions} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 100
  }
});

export default Login;
