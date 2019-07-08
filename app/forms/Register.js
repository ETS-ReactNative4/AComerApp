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
      template: inputTemplate,
      config: {
        placeholder: "Ingresa tu nombre y apellido ...",
        icontype: "material-community",
        iconName: "account-outline"
      }
    },
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
    },
    passwordConfirmation: {
      template: inputTemplate,
      config: {
        placeholder: "Repite tu contraseña",
        password: true,
        secureTextEntry: true,
        icontype: "material-community",
        iconName: "lock-reset"
      }
    }
  }
};
