import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { AirbnbRating, Button } from "react-native-elements";
import Toast from "react-native-easy-toast";

import t from "tcomb-form-native";
const Form = t.form.Form;
import {
  AddReviewRestaurantStruct,
  AddReviewRestaurantOptions
} from "../../forms/AddReviewRestaurant";

const AddReviewRestaurant = ({ navigation }) => {
  const rating = useRef(null);
  const AddReviewRestaurantForm = useRef(null);
  const toast = useRef(null);

  const sendReview = () => {
    const ratingValue = rating.current.state.position;

    if (ratingValue === 0) {
      toast.current.show("Debes calificar el restaurant", 1500);
    } else {
      const validate = AddReviewRestaurantForm.current.refs.input.state.value;

      if (!validate) {
        toast.current.show("Debes completar todos los campos", 1500);
      } else {
        if (!validate.review) {
          toast.current.show("Debes agregar una opinión", 1500);
        } else if (!validate.title) {
          toast.current.show("Debes agregar un título a tu opinión", 1500);
        } else {
          const formData = {
            title: validate.title,
            review: validate.review,
            stars: ratingValue,
            restaurant_id: navigation.state.params.id,
            user_id: navigation.state.params.user.id
          };

          console.log(formData);
        }
      }
    }
  };

  return (
    <View style={styles.viewBody}>
      <View style={styles.viewRating}>
        <AirbnbRating
          ref={rating}
          count={5}
          reviews={[
            "Pésimo",
            "Deficiente",
            "Normal",
            "Muy Bueno",
            "¡Excelente!"
          ]}
          defaultRating={0}
          size={35}
        />
      </View>
      <View style={styles.formReview}>
        <Form
          ref={AddReviewRestaurantForm}
          type={AddReviewRestaurantStruct}
          options={AddReviewRestaurantOptions}
        />
      </View>
      <View style={styles.viewSendReview}>
        <Button
          title="Enviar"
          buttonStyle={styles.sendBtnReview}
          onPress={sendReview}
        />
      </View>
      <Toast
        ref={toast}
        position="bottom"
        positionValue={320}
        fadeInDuration={1000}
        fadeOutDuration={1000}
        opacity={0.8}
        textStyle={{ color: "#fff" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1
  },
  viewRating: {
    height: 110,
    backgroundColor: "#f2f2f2"
  },
  formReview: {
    margin: 10,
    marginTop: 40
  },
  viewSendReview: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20
  },
  sendBtnReview: {
    backgroundColor: "#ffc107"
  }
});

export default AddReviewRestaurant;
