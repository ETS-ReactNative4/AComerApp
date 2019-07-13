import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
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
  }
});

export default AddRestaurant;
