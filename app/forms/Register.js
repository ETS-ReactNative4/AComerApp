import t from "tcomb-form-native";
import formValidation from "../utils/Validations";
import inputTemplate from "./templates/input";

export const RegisterStruct = t.struct({
  name: t.String,
  email: formValidation.email,
  password: formValidation.password,
  passwordConfirmation: formValidation.password
});

export const RegisterOptions = {
  fields: {
    name: {
      label: "Nombre (*)",
      placeholder: "Ingresa tu nombre y apellido ...",
      error: "Nombre inválido.",
      template: inputTemplate
    },
    email: {
      label: "Email (*)",
      placeholder: "Ingresa tu email ...",
      error: "Email inválido."
    },
    password: {
      label: "Contraseña (*)",
      placeholder: "Escribe tu contraseña ...",
      error: "Contraseña inválida.",
      password: true,
      secureTextEntry: true
    },
    passwordConfirmation: {
      label: "Confirmar contraseña",
      placeholder: "Repite tu contraseña",
      error: "Contraseña inválida.",
      password: true,
      secureTextEntry: true
    }
  }
};
