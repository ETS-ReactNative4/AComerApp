import t from "tcomb-form-native";
import inputTemplate from "./templates/input";
import textAreaTemplate from "./templates/TextArea";

export const AddReviewRestaurantStruct = t.struct({
  title: t.String,
  review: t.String
});

export const AddReviewRestaurantOptions = {
  fields: {
    title: {
      template: inputTemplate,
      config: {
        placeholder: "Título de la opinión",
        icontype: "material-community",
        iconName: "silverware-variant"
      }
    },
    review: {
      template: textAreaTemplate,
      config: {
        placeholder: "Opinión"
      }
    }
  }
};
