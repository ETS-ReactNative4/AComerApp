import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Icon, Image } from "react-native-elements";
import { Permissions, ImagePicker } from "expo";
import Toast from "react-native-easy-toast";
import defaultImage from "../../../assets/img/comiendo-en-restaurant-asociado-a-acomerapp.png";

import t from "tcomb-form-native";
const Form = t.form.Form;
import {
  AddRestaurantStruct,
  AddRestaurantOptions
} from "../../forms/AddRestaurant";

const AddRestaurant = () => {
  const addRestaurantForm = useRef(null);
  const { formData, setFormData } = useState({
    name: "",
    city: "",
    address: "",
    description: ""
  });

  return (
    <View style={styles.viewBody}>
      <View style={styles.viewPhoto}>
        <Image source={defaultImage} style={{ width: 500, height: 200 }} />
      </View>
      <View>
        <Form
          ref={addRestaurantForm}
          type={AddRestaurantStruct}
          options={AddRestaurantOptions}
          value={formData}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewBody: {
    flex: 1
  },
  viewPhoto: {
    alignItems: "center",
    height: 200,
    marginBottom: 20
  }
});

export default AddRestaurant;
