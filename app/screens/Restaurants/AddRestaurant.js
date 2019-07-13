import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Icon, Image } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
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
  const toast = useRef(null);
  const { formData, setFormData } = useState({
    name: "",
    city: "",
    address: "",
    description: ""
  });

  const uploadImage = async () => {
    const resultPermissions = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (resultPermissions.status === "denied") {
      toast.current.show("Es necesario aceptar los permisos de la galería");
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowEditing: true
      });

      if (result.cancelled) {
        toast.current.show("Haz cerrado la galería de imagenes", 1500);
      } else {
        const file = {
          uri: result.uri,
          name: result.uri.replace(/^.*[\\\/]/, ""),
          type: "image/jpeg"
        };
        //setRestaurantPhoto(file.uri);
        //console.log("HOLAAA", restaurantPhoto);
        //uploadImage(file, user.id, toast.current, 500);
      }
    }
  };

  return (
    <View style={styles.viewBody}>
      <View style={styles.viewPhoto}>
        {restaurantPhoto ? (
          <Image source={restaurantPhoto} style={{ width: 500, height: 200 }} />
        ) : (
          <Image source={defaultImage} style={{ width: 500, height: 200 }} />
        )}
      </View>
      <View>
        <Form
          ref={addRestaurantForm}
          type={AddRestaurantStruct}
          options={AddRestaurantOptions}
          value={formData}
        />
      </View>
      <View style={styles.viewIconUploadPhoto}>
        <Icon
          name="camera"
          type="material-community"
          color="#7a7a7a"
          iconStyle={styles.addPhotoIcon}
          onPress={uploadImage}
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
  viewPhoto: {
    alignItems: "center",
    height: 200,
    marginBottom: 20
  },
  viewIconUploadPhoto: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: 12
  },
  addPhotoIcon: {
    backgroundColor: "#e3e3e3",
    padding: 17,
    paddingBottom: 14,
    margin: 0
  }
});

export default AddRestaurant;
