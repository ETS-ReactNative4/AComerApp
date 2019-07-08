import t from "tcomb-form-native";
import formValidation from "../utils/Validations";
import inputTemplate from "./templates/input";

export const LoginStruct = t.struct({
  email: formValidation.email,
  password: formValidation.password
});

export const LoginOptions = {
  fields: {
    email: {
      template: inputTemplate,
      config: {
        placeholder: "Ingresa tu email ...",
        icontype: "material-community",
        iconName: "at"
      }
    },
    password: {
      template: inputTemplate,
      config: {
        placeholder: "Ingresa tu contraseña ...",
        password: true,
        secureTextEntry: true,
        icontype: "material-community",
        iconName: "lock-outline"
      }
    }
  }
};
