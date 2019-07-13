import t from "tcomb-form-native";
import inputTemplate from "./templates/input";

export const AddRestaurantStruct = t.struct({
  name: t.String,
  address: t.String,
  city: t.String,
  description: t.String
});

export const AddRestaurantOptions = {
  fields: {
    name: {
      template: inputTemplate,
      config: {
        placeholder: "Nombre del Restaurant",
        icontype: "material-community",
        iconName: "silverware-variant"
      }
    },
    city: {
      template: inputTemplate,
      config: {
        placeholder: "Ciudad del Restaurant",
        icontype: "material-community",
        iconName: "city"
      }
    },
    address: {
      template: inputTemplate,
      config: {
        placeholder: "Dirección del Restaurant",
        icontype: "material-community",
        iconName: "map-marker"
      }
    },
    description: {
      template: inputTemplate,
      config: {
        placeholder: "Descripción del Restaurant",
        icontype: "material-community",
        iconName: "silverware-variant"
      }
    }
  }
};
